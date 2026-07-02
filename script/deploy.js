const { ethers } = require('hardhat');

async function main() {
  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy({
    gasPrice: 160e6,
    gasLimit: 2e6,
  });

  await counter.waitForDeployment();

  console.log('Counter deployed to:', await counter.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
