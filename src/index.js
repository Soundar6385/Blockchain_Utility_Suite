// blockchain-service/index.js
import { JsonRpcProvider, Wallet, formatEther, parseEther, formatUnits, Contract } from 'ethers';

class BlockchainService {
    constructor(providerUrl) {
        this.provider = new JsonRpcProvider(providerUrl);
    }

    createWallet() {
        return Wallet.createRandom();
    }

    getBalance(address) {
        return this.provider.getBalance(address).then(balance => formatEther(balance));
    }

    async sendTransaction(privateKey, to, amount) {
        const wallet = new Wallet(privateKey, this.provider);
        const tx = {
            to,
            value: parseEther(amount),
            gasLimit: 21000
        };
        return wallet.sendTransaction(tx);
    }

    async signMessage(privateKey, message) {
        const wallet = new Wallet(privateKey);
        return wallet.signMessage(message);
    }

    async getTransaction(txHash) {
        return this.provider.getTransaction(txHash);
    }

    async getBlockNumber() {
        return this.provider.getBlockNumber();
    }

    async getGasPrice() {
        return this.provider.getGasPrice().then(price => formatUnits(price, 'gwei'));
    }

    async estimateGas(txData) {
        return this.provider.estimateGas(txData).then(gas => gas.toString());
    }

    async resolveENS(name) {
        return this.provider.resolveName(name);
    }

    async verifyContract(address) {
        const code = await this.provider.getCode(address);
        return code !== '0x';
    }

    async getTokenBalance(walletAddress, tokenAddress) {
        const abi = ["function balanceOf(address owner) view returns (uint256)"];
        const contract = new Contract(tokenAddress, abi, this.provider);
        return contract.balanceOf(walletAddress).then(balance => formatEther(balance));
    }

    async getTokenSymbol(tokenAddress) {
        const abi = ["function symbol() view returns (string)"];
        const contract = new Contract(tokenAddress, abi, this.provider);
        return contract.symbol();
    }
}

export default BlockchainService;