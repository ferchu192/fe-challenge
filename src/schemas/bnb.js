import Crypto from './crypto.js';

// BNB implementation
class BNB extends Crypto {
    constructor() {
      // BNB has 18 decimals and runs on Binance Smart Chain
      super({
        symbol: 'BNB',
        icon: '/assets/bnb.svg',
        decimals: 18,
        chain: 56,
        name: 'Binance Coin',
        projectWeb: 'https://www.bnbchain.org/en',
        txWeb: 'https://bscscan.com/tx',
        walletWeb: 'https://bscscan.com/address',
      });

      // BNB specific properties
      this.blockTime = 3; // seconds
      this.isEIP1559 = false;
      this.networkType = 'PoSA'; // Proof of Stake Authority
    }
    
    // Convert wei to BNB
    weiToBNB(wei) {
      return wei / Math.pow(10, this.decimals);
    }
    
    // Convert BNB to wei
    BNBToWei(bnb) {
      return bnb * Math.pow(10, this.decimals);
    }
    
    // Convert to Gwei (used for gas)
    toGwei(wei) {
      return wei / Math.pow(10, 9);
    }
    
    // Convert from Gwei to wei
    fromGwei(gwei) {
      return gwei * Math.pow(10, 9);
    }
    
    // Estimate gas fee (BNB typically has lower gas fees than Ethereum)
    estimateGasFee(gasLimit = 21000, gasPrice = 5) {
      // Gas fees in Gwei
      return {
        gasLimit,
        gasPrice,
        estimatedCost: this.fromGwei(gasPrice * gasLimit) // in wei
      };
    }
    
    // Override getInfo to include BNB specific properties
    getInfo() {
      return {
        ...super.getInfo(),
        blockTime: this.blockTime,
        isEIP1559: this.isEIP1559,
        networkType: this.networkType
      };
    }
  }

  export default BNB;
