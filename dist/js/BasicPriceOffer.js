class BasicPriceOffer extends PriceOffer {
  constructor() {
    super();
    this.name = "Basic";
    this.accesToFeatures = [true, true, true, false, false, false];
    this.price = 100;
    this.discription = "Package for users with low expectations.";
  }
}
