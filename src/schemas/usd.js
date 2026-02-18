import Crypto from './crypto.js';

// USD implementation
class USD extends Crypto {
    constructor() {
      // USD has 8 decimals (satoshis) and runs on its own chain
      super({symbol: 'USD', icon: `${process.env.PUBLIC_URL}/assets/usd.svg`, decimals: 2, name: 'USD'});
    }

    // Override getInfo to include Bitcoin specific properties
    getInfo() {
      return {
        ...super.getInfo(),
      };
    }
  }

export default USD;