class PriceOfferFeatures {
  constructor() {
    this.features = [
      {
        discription: "Unlimited Acces to ALL libraries",
        isAcces: false,
      },
      {
        discription: "Unlimited amount of project to create",
        isAcces: false,
      },
      {
        discription: "Access to custom libraries from Github",
        isAcces: false,
      },
      {
        discription: "Database tools, SQL",
        isAcces: false,
      },
      {
        discription: "Offline access to all features of our product",
        isAcces: false,
      },
      {
        discription: "The ability to create group projects up to 50 members",
        isAcces: false,
      },
    ];
  }

  getFeatures() {
    return this.features;
  }

  getSingleFeature(index) {
    return this.features[index];
  }

  _changeAcces(feat, isAcces) {
    feat.isAcces = isAcces;
  }

  _isAccesToFeaturesEmpty(accesToFeatures) {
    if (accesToFeatures === undefined) {
      throw new TypeError("accesToFeatures Array is empty");
    }
  }

  assignAcces(accesToFeatures) {
    this._isAccesToFeaturesEmpty(accesToFeatures);
    for (const val of this.features) {
      this._changeAcces(val, accesToFeatures[this.features.indexOf(val)]);
    }
  }
}
