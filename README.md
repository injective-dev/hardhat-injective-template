# Hardhat Injective Starter Template

<div align="center">
  <p>Lean Hardhat starter for compiling, testing, deploying, verifying, and interacting with EVM smart contracts on Injective Testnet.</p>
  <p>
    <strong>Stack:</strong> Hardhat · Solidity · Ethers · Blockscout · Injective EVM
  </p>
</div>

## Quick Start

Use this repository as a template.

- On GitHub, press the "Use this template" button.
- In the dropdown, select "Create new repository"
- Fill in the form, then press the "Create repository"
- You should now have a copy of the template repo in your own Github account or organisation
- Click on the "<> Code" button
- In the dropdown, select the "Local" tab, then copy the git URL

Install dependencies and configure your environment:

```bash
git clone https://github.com/${YOUR_GITHUB}/hardhat-injective-template.git hardhat-injective-template
cd hardhat-injective-template
npm install
cp .env.example .env
```

Update `.env` with your Injective testnet RPC URL and a funded private key.
(See "Configuration" section below.)

Run:

```bash
npm run compile                  # compile contract
npm run test                     # run local (simulated EVM) tests
npm run deploy                   # deploy contract to Injective Testnet
npm run verify -- 0xYOURADDRESS  # verify deployed contract on Injective Testnet Blockscout
npm run interact                 # open a Hardhat console on Injective Testnet to
                                 # query/transact with deployed contract
```

## What's Included

### Core Scaffold

- [x] **Hardhat project structure**: Minimal layout for contracts, tests, scripts, and config.
- [x] **Injective testnet config**: Ready-to-use `inj_testnet` network in `hardhat.config.js`.
- [x] **Blockscout verification config**: Pre-wired `hardhat verify` support for Injective Testnet.
- [x] **Environment-based secrets**: JSON-RPC URL and deployer private key in `.env`.

### Example Contract Flow

- [x] **`contracts/Counter.sol`**: Tiny example contract to confirm the toolchain works.
- [x] **`test/Counter.test.js`**: Local test coverage for the included contract.
- [x] **`script/deploy.js`**: Deployment script for Injective Testnet.


## Project Structure

```text
├── contracts/
│   └── Counter.sol       # Minimal starter contract
├── script/
│   └── deploy.js         # Deploys Counter to Injective Testnet
├── test/
│   └── Counter.test.js   # Local contract tests
├── .env.example          # Environment variable template
├── .gitignore
├── hardhat.config.js     # Hardhat + Injective + Blockscout config
├── package.json
└── README.md
```

## Configuration

Copy `.env.example` to `.env` and provide:

```bash
INJ_TESTNET_RPC_URL=https://k8s.testnet.json-rpc.injective.network/
PRIVATE_KEY=your_private_key_without_0x_prefix
```

`PRIVATE_KEY` is optional for local compilation and testing, but required for:
`npm run deploy`, `npm run verify`, and `npm run console`.
Obtain this from your wallet.
Fund your wallet using [`testnet.faucet.injective.network`](https://testnet.faucet.injective.network/).

The included deploy script uses Injective-friendly defaults:

- `gasPrice`: `160000000`
- `gasLimit`: `2000000`

## Author

[Brendan Graetz](https://blog.bguiz.com/)

## License

MIT
