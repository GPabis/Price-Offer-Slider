class PriceOfferFeatures {
  constructor() {
    this.feat1 = {
      discroption: "Unlimited Acces to ALL libraries",
      isAcces: false,
    };
    this.feat2 = {
      discroption: "Unlimited amount of project to create",
      isAcces: false,
    };
    this.feat3 = {
      discroption: "Access to custom libraries from Github",
      isAcces: false,
    };
    this.feat4 = {
      discroption: "Database tools, SQL",
      isAcces: false,
    };
    this.feat5 = {
      discroption: "Offline access to all features of our product",
      isAcces: false,
    };
    this.feat6 = {
      discroption: "The ability to create group projects up to 50 members",
      isAcces: false,
    };
  }

  _getFeatList() {
    const featList = [
      this.feat1,
      this.feat2,
      this.feat3,
      this.feat4,
      this.feat5,
      this.feat6,
    ];
    return featList;
  }

  _changeAcces(feat, isAcces) {
    feat.isAcces = isAcces;
  }

  assignAcces(accesToFeatures) {
    for (const val of this._getFeatList()) {
      this._changeAcces(val, accesToFeatures[this._getFeatList().indexOf(val)]);
    }
  }
}
