import Crypto from './crypto.js';

// Polygon implementation
class Polygon extends Crypto {
    constructor() {
      // Polygon has 18 decimals (wei) and runs on its own chain (ID 137)
      super({
        symbol: 'MATIC',
        icon: `${process.env.PUBLIC_URL}/assets/matic.svg`,
        decimals: 18,
        chain: 137,
        name: 'Polygon',
        projectWeb: 'https://polygon.technology',
        txWeb: 'https://polygonscan.com/tx',
        walletWeb: 'https://wallet.polygon.technology'
      });

      // Polygon specific properties
      this.blockTime = 2; // seconds
      this.isEIP1559 = true; // Supports EIP-1559 after London upgrade
      this.networkType = 'PoS'; // Proof of Stake
      this.layer = 2; // Layer 2 scaling solution
    }
    
    // Convert wei to MATIC
    weiToMATIC(wei) {
      return wei / Math.pow(10, this.decimals);
    }
    
    // Convert MATIC to wei
    MATICToWei(matic) {
      return matic * Math.pow(10, this.decimals);
    }
    
    // Convert to Gwei (used for gas)
    toGwei(wei) {
      return wei / Math.pow(10, 9);
    }
    
    // Convert from Gwei to wei
    fromGwei(gwei) {
      return gwei * Math.pow(10, 9);
    }
    
    // Estimate gas fee (Polygon typically has lower gas fees than Ethereum)
    estimateGasFee(gasLimit = 21000, maxPriorityFee = 30, maxFee = 100) {
      // Gas fees in Gwei
      return {
        gasLimit,
        maxPriorityFeePerGas: maxPriorityFee,
        maxFeePerGas: maxFee,
        estimatedCost: this.fromGwei(maxFee * gasLimit) // in wei
      };
    }
    
    // Get checkpoint information (specific to Polygon)
    getCheckpointInfo() {
      return {
        checkpointInterval: 10000, // blocks
        rootChain: 'Ethereum',
        finalityTime: '~30 minutes'
      };
    }
    
    // Override getInfo to include Polygon specific properties
    getInfo() {
      return {
        ...super.getInfo(),
        blockTime: this.blockTime,
        isEIP1559: this.isEIP1559,
        networkType: this.networkType,
        layer: this.layer
      };
    }
  }

  export default Polygon;
