class EnterprisePriceOffer extends PriceOffer {
  constructor() {
    super();
    this.name = "Enterprise";
    this.accesToFeatures = [true, true, true, true, true, true];
    this.price = 499.99;
    this.description = "Package for companies and teams with all functions.";
  }
}
