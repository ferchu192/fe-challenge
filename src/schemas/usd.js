import Crypto from './crypto.js';

// USD implementation
class USD extends Crypto {
    constructor() {
      // USD has 8 decimals (satoshis) and runs on its own chain
      super('USD', '/assets/usd.svg', 2, 'USD');
    }

    // Override getInfo to include Bitcoin specific properties
    getInfo() {
      return {
        ...super.getInfo(),
      };
    }
  }

export default USD;