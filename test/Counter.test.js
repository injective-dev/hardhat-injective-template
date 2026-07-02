const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', function () {
  async function deployCounter() {
    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    await counter.waitForDeployment();
    return counter;
  }

  it('starts at zero', async function () {
    const counter = await deployCounter();

    expect(await counter.value()).to.equal(0);
  });

  it('increments from zero', async function () {
    const counter = await deployCounter();

    await counter.increment(100);

    expect(await counter.value()).to.equal(100);
  });

  it('increments cumulatively', async function () {
    const counter = await deployCounter();

    await counter.increment(100);
    await counter.increment(23);

    expect(await counter.value()).to.equal(123);
  });
});
