# Blockchain Utility Suite

## Overview
A Effective and fully packed JavaScript-based blockchain utility module using ethers.js to interact with the Ethereum network.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/blockchain_utility_suite.svg)](https://www.npmjs.com/package/blockchain_utility_suite)
[![GitHub Issues](https://img.shields.io/github/issues/Soundar6385/blockchain_utility_suite.svg)](https://github.com/Soundar6385/blockchain_utility_suite/issues)

## Installation

### Install via npm
```sh
npm install blockchain_utility_suite
```

### Clone from GitHub
```sh
git clone https://github.com/Soundar6385/blockchain-service.git
cd blockchain_utility_suite
npm install
```

## Usage

```javascript
const BlockchainService = require('blockchain-service');
const service = new BlockchainService('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
```

## Features

### Create Wallet
```javascript
const wallet = service.createWallet();
console.log(wallet.address, wallet.privateKey);
```

### Get Balance
```javascript
service.getBalance('0xYourAddress').then(console.log);
```

### Send Transaction
```javascript
service.sendTransaction('your-private-key', '0xRecipientAddress', '0.01')
    .then(console.log);
```

### Sign Message
```javascript
service.signMessage('your-private-key', 'Hello, Blockchain!')
    .then(console.log);
```

### Get Transaction Details
```javascript
service.getTransaction('0xTransactionHash').then(console.log);
```

### Get Current Block Number
```javascript
service.getBlockNumber().then(console.log);
```

### Get Gas Price
```javascript
service.getGasPrice().then(console.log);
```

### Estimate Gas
```javascript
service.estimateGas({ to: '0xRecipientAddress', value: ethers.parseEther('0.01') })
    .then(console.log);
```

### Resolve ENS Name
```javascript
service.resolveENS('vitalik.eth').then(console.log);
```

### Verify Contract Address
```javascript
service.verifyContract('0xContractAddress').then(console.log);
```

### Get ERC-20 Token Balance
```javascript
service.getTokenBalance('0xWalletAddress', '0xTokenAddress').then(console.log);
```

### Get ERC-20 Token Symbol
```javascript
service.getTokenSymbol('0xTokenAddress').then(console.log);
```

## Contributing

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```sh
   git clone https://github.com/Soundar6385/blockchain-service.git
   ```
3. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
4. Make your changes and commit:
   ```sh
   git commit -m "Your descriptive commit message"
   ```
5. Push to your fork:
   ```sh
   git push origin feature-branch
   ```
6. Create a pull request on GitHub.

## Publishing to npm

1. Ensure you are logged into npm:
   ```sh
   npm login
   ```
2. Update the package version if needed:
   ```sh
   npm version patch
   ```
3. Publish the package:
   ```sh
   npm publish --access public
   ```

## Issues & Contributions
If you find any issues or would like to contribute, please open an issue or create a pull request on GitHub.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

