class BasicPriceOffer extends PriceOffer {
  constructor() {
    super();
    this.name = "Basic";
    this.accesToFeatures = [true, true, true, false, false, false];
    this.price = 99.99;
    this.description = "Package for users with low expectations.";
  }
}
