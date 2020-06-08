class StudentPriceOffer extends PriceOffer {
  constructor() {
    super();
    this.name = "Student";
    this.accesToFeatures = [true, false, false, false, false, false];
    this.price = 19.99;
    this.description =
      "Package for students or people who want to test our product.";
  }
}
