class PriceOffer {
  constructor() {
    if (new.target === PriceOffer) {
      throw new TypeError("Cannot construct PriceOffer instances directly");
    }
    this.name;
    this.description;
    this.price;
    this.features = new PriceOfferFeatures();
    this.accesToFeatures;
  }

  _getName() {
    return this.name;
  }

  _getDicsription() {
    return this.description;
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
    return `
      <div class="offer-name">
        <h1>${this._getName()}</h1>
        <p>${this._getDicsription()}</p>
      </div>
    `;
  }

  _createPriceSection() {
    return `
      <div class="offer-price">
        <strong>PLN ${this._getPrice()}</strong><sub>/mo</sub>
      </div>
    `;
  }

  _assignAccessIcon(indexOfFeat) {
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
          ${this._assignAccessIcon(this.features.getFeatures().indexOf(val))}
          <p>${val.description}</p>
        </li>
        `;
    }
    return featuresList;
  }

  _createFeaturesSection() {
    return `
      <div class="offer-features">
        <ul>
          ${this._createFeaturesList()}
        </ul>
      </div>
    `;
  }

  _createSelectSection() {
    return `
      <div class="offer-select">
        <button class="btn">Select</button>
      </div>
    `;
  }

  createSlideTemplate(slide) {
    return `
    <div class="slide ${slide}">
      ${this._createNameSection()}
      ${this._createPriceSection()}
      ${this._createFeaturesSection()}
      ${this._createSelectSection()}
    </div>
    `;
  }
}
