class PriceOffer {
  constructor() {
    if (new.target === PriceOffer) {
      throw new TypeError("Cannot construct PriceOffer instances directly");
    }
    this.name;
    this.discription;
    this.price;
    this.features = new PriceOfferFeatures();
    this.accesToFeatures;
  }

  _getName() {
    return this.name;
  }

  _getDicsription() {
    return this.discription;
  }

  _getFeatures() {
    return this.features;
  }

  _getPrice() {
    return this.price;
  }

  _getAccesToFeatures() {
    return this.accesToFeatures;
  }

  _setAcces() {
    this.features.assignAcces(this.accesToFeatures);
  }

  _createNameSection() {
    const nameSection = `
      <div class="offer-name">
        <h1>${this._getName()}</h1>
        <p>${this._getDicsription()}</p>
      </div>
    `;
    return nameSection;
  }

  _createPriceSection() {
    const priceSection = `
      <div class="offer-price">
        <strong>PLN ${this._getPrice()}</strong><sub>/mo</sub>
      </div>
    `;
    return priceSection;
  }

  _assignAccesIcon(indexOfFeat) {
    let icon = this.features.getSingleFeature(indexOfFeat).isAcces
      ? '<i class="fas fa-check"></i>'
      : '<i class="fas fa-times"></i>';
    return icon;
  }

  _createFeaturesList() {
    this._setAcces();
    let featuresList = "";
    for (const val of this.features.getFeatures()) {
      featuresList += `
        <li>
          ${this._assignAccesIcon(this.features.getFeatures().indexOf(val))}
          <p>${val.discription}</p>
        </li>
        `;
    }
    return featuresList;
  }

  _createFeaturesSection() {
    const featuresSection = `
      <div class="offer-features">
        <ul>
          ${this._createFeaturesList()}
        </ul>
      </div>
    `;
    return featuresSection;
  }

  _createSelectSection() {
    const selectSection = `
      <div class="offer-select">
        <button class="btn">Select</button>
      </div>
    `;
    return selectSection;
  }

  createSlideTemplate(slide) {
    const slideTemplate = `
    <div class="slide ${slide}">
      ${this._createNameSection()}
      ${this._createPriceSection()}
      ${this._createFeaturesSection()}
      ${this._createSelectSection()}
    </div>
    `;
    return slideTemplate;
  }
}
