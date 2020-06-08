class ProPriceOffer extends PriceOffer {
  constructor() {
    super();
    this.name = "Pro";
    this.accesToFeatures = [true, true, true, true, true, false];
    this.price = 249.99;
    this.description =
      "Package for professional users with high expectationsi.";
  }
}
