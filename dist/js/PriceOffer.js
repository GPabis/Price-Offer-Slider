class PriceOffer {
  constructor() {
    if (new.target === PriceOffer) {
      throw new TypeError("Cannot construct PriceOffer instances directly");
    }
    this.name;
    this.features = new PriceOfferFeatures();
  }
  getName() {
    return this.name;
  }
}
