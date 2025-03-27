// Solana implementation
class Solana extends Crypto {
    constructor() {
      // Solana has 9 decimals (lamports) and runs on its own chain
      super('SOL', '◎', 9, 'Solana');
      
      // Solana specific properties
      this.blockTime = 0.4; // seconds
      this.epochDuration = 2 * 24 * 60 * 60; // 2 days in seconds
      this.stakingAPY = 6.5; // percentage
    }
    
    // Convert lamports to SOL
    lamportsToSOL(lamports) {
      return lamports / Math.pow(10, this.decimals);
    }
    
    // Convert SOL to lamports
    SOLToLamports(sol) {
      return sol * Math.pow(10, this.decimals);
    }
    
    // Calculate staking rewards
    calculateStakingRewards(amount, days) {
      const annualReturn = amount * (this.stakingAPY / 100);
      return (annualReturn / 365) * days;
    }
    
    // Estimate transaction fee (Solana has fixed fees mostly)
    estimateFee() {
      return 0.000005 * Math.pow(10, this.decimals); // 0.000005 SOL in lamports
    }
    
    // Override getInfo to include Solana specific properties
    getInfo() {
      return {
        ...super.getInfo(),
        blockTime: this.blockTime,
        epochDuration: this.epochDuration,
        stakingAPY: this.stakingAPY
      };
    }
  }
  
  // Export the classes
  module.exports = {
    Solana
  };