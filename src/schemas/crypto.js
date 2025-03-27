class Crypto {
  constructor(symbol, icon, decimals, chain) {
    this.symbol = symbol;
    this.icon = icon;
    this.decimals = decimals;
    this.chain = chain;
    this.price = null;
  }

  // Set current price
  setPrice(price) {
    this.price = price;
    return this;
  }

  // Get current price
  getPrice() {
    return this.price;
  }

  // Format amount according to decimals
  formatAmount(amount) {
    return Number(amount).toFixed(this.decimals);
  }

  // Get full info as object
  getInfo() {
    return {
      symbol: this.symbol,
      icon: this.icon,
      decimals: this.decimals,
      chain: this.chain,
      price: this.price,
    };
  }

  // Clone the crypto instance
  clone() {
    const cloned = new Crypto(this.symbol, this.icon, this.decimals, this.chain);
    cloned.setPrice(this.price);
    return cloned;
  }
}

// Export the class
module.exports = Crypto;
