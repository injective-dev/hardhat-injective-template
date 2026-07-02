const { ethers } = require('hardhat');

async function main() {
  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy({
    gasPrice: 160e6,
    gasLimit: 2e6,
  });
  console.log('Deploying Counter...');

  // Note that Injective has **too fast** a block time (< 1s)
  // for ethers' `contract.waitForDeployment()`.
  // By the time it polls, the block in which the deployment transaction
  // was mined is already in the rear-view mirror.
  // We'll implement our own custom polling in lieu of this.
  const deployTx = counter.deploymentTransaction();
  console.log('Deployment transaction:', deployTx);
  let attempts = 3;
  let deployTxReceipt;
  while ((attempts--) > 0) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    deployTxReceipt = await deployTx.wait(0);
    if (!!deployTxReceipt) {
      break;
    }
  }
  console.log('Deployment transaction receipt:', deployTxReceipt);
  if (deployTxReceipt && deployTxReceipt.status === 1) {
    console.log('Counter deployed to:', await counter.getAddress());
  } else {
    console.log('Counter deployment failed. (Transaction failed, or receipt not found.)');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
