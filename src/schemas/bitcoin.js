import Crypto from './crypto.js';

// Bitcoin implementation
class Bitcoin extends Crypto {
    constructor() {
      // Bitcoin has 8 decimals (satoshis) and runs on its own chain
      super('BTC', '/assets/btc.svg', 8, 'Bitcoin');
      
      // Bitcoin specific properties
      this.blockTime = 10; // minutes
      this.halving = {
        next: 2024,
        blocksRemaining: 0
      };
    }
    
    // Convert satoshis to BTC
    satoshisToBTC(satoshis) {
      return satoshis / Math.pow(10, this.decimals);
    }
    
    // Convert BTC to satoshis
    BTCToSatoshis(btc) {
      return btc * Math.pow(10, this.decimals);
    }
    
    // Estimate transaction fee based on priority
    estimateFee(priority = 'medium') {
      const feeRates = {
        low: 1,      // sat/vB
        medium: 5,   // sat/vB
        high: 10     // sat/vB
      };
      
      const averageTransactionSize = 250; // bytes
      return feeRates[priority] * averageTransactionSize;
    }
    
    // Override getInfo to include Bitcoin specific properties
    getInfo() {
      return {
        ...super.getInfo(),
        blockTime: this.blockTime,
        halving: this.halving
      };
    }
  }

export default Bitcoin;