class Crypto {
  constructor({symbol, icon, decimals, name, chain, projectWeb, txWeb, walletWeb}) {
    this.symbol = symbol;
    this.icon = icon;
    this.decimals = decimals;
    this.chain = chain;
    this.price = null;
    this.name = name;
    this.projectWeb = projectWeb;
    this.txWeb = txWeb;
    this.walletWeb = walletWeb;
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
      name: this.name,
      icon: this.icon,
      decimals: this.decimals,
      chain: this.chain,
      price: this.price,
      projectWeb: this.projectWeb,
      txWeb: this.txWeb,
      walletWeb: this.walletWeb,
    };
  }

  // Clone the crypto instance
  clone() {
    const cloned = new Crypto(this.symbol, this.icon, this.decimals, this.name, this.chain, this.web);
    cloned.setPrice(this.price);
    return cloned;
  }
}

// Export the class
module.exports = Crypto;
