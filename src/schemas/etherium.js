import Crypto from './crypto.js';

// Ethereum implementation
class Ethereum extends Crypto {
    constructor() {
      // Ethereum has 18 decimals (wei) and runs on its own chain
      super('ETH', '/assets/eth.svg', 18, 'Ethereum');
      
      // Ethereum specific properties
      this.blockTime = 12; // seconds
      this.isEIP1559 = true;
      this.networkType = 'PoS'; // Proof of Stake
    }
    
    // Convert wei to ETH
    weiToETH(wei) {
      return wei / Math.pow(10, this.decimals);
    }
    
    // Convert ETH to wei
    ETHToWei(eth) {
      return eth * Math.pow(10, this.decimals);
    }
    
    // Convert to Gwei (used for gas)
    toGwei(wei) {
      return wei / Math.pow(10, 9);
    }
    
    // Convert from Gwei to wei
    fromGwei(gwei) {
      return gwei * Math.pow(10, 9);
    }
    
    // Estimate gas fee
    estimateGasFee(gasLimit = 21000, maxPriorityFee = 1.5, maxFee = 30) {
      // Gas fees in Gwei
      return {
        gasLimit,
        maxPriorityFeePerGas: maxPriorityFee,
        maxFeePerGas: maxFee,
        estimatedCost: this.fromGwei(maxFee * gasLimit) // in wei
      };
    }
    
    // Override getInfo to include Ethereum specific properties
    getInfo() {
      return {
        ...super.getInfo(),
        blockTime: this.blockTime,
        isEIP1559: this.isEIP1559,
        networkType: this.networkType
      };
    }
  }

  export default Ethereum;