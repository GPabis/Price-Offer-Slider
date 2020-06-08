class PriceOfferFeatures {
  constructor() {
    this.features = [
      {
        description: "Unlimited Acces to ALL libraries",
        isAcces: false,
      },
      {
        description: "Unlimited amount of project to create",
        isAcces: false,
      },
      {
        description: "Access to custom libraries from Github",
        isAcces: false,
      },
      {
        description: "Database tools, SQL",
        isAcces: false,
      },
      {
        description: "Offline access to all features of our product",
        isAcces: false,
      },
      {
        description: "The ability to create group projects up to 50 members",
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

  _changeAccess(feat, isAcces) {
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
      this._changeAccess(val, accesToFeatures[this.features.indexOf(val)]);
    }
  }
}
