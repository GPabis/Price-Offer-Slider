class PriceOfferSlider {
  constructor() {
    this.activeSlideIndex = 1;
    this.priceOffers = [
      new StudentPriceOffer(),
      new BasicPriceOffer(),
      new ProPriceOffer(),
      new EnterprisePriceOffer(),
    ];
    this._generateSlider();
    this._startEventListener();
  }

  _getPriceOffers() {
    return this.priceOffers;
  }

  _getSinglePriceOffers(index) {
    return this.priceOffers[index];
  }

  _getActiveSlideIndex() {
    return this.activeSlideIndex;
  }

  _setActiveSlideIndex(index) {
    this.activeSlideIndex = index;
  }

  _createDotts() {
    let dotts = "";
    this._getPriceOffers().forEach(
      (element, index) =>
        (dotts += this._isActive(index)
          ? `<span class="dot active ${index}"></span>`
          : `<span class="dot ${index}"></span>`)
    );
    return dotts;
  }

  _createDottedMenu() {
    return `
      <div class="dotted-menu">
        ${this._createDotts()}
      </div>`;
  }

  _isActive(index) {
    return index === this._getActiveSlideIndex();
  }

  _isSlideFirst(index) {
    return (
      this._getPriceOffers().indexOf(this._getSinglePriceOffers(index)) === 0
    );
  }

  _isSlideLast(index) {
    return (
      this._getPriceOffers().indexOf(this._getSinglePriceOffers(index)) ===
      this._getPriceOffers().length - 1
    );
  }

  _lastSlideSelected() {
    return this._createSlides(
      this._getActiveSlideIndex() - 1,
      this._getActiveSlideIndex(),
      0
    );
  }

  _firstSlideSelected() {
    return this._createSlides(
      this._getPriceOffers().length - 1,
      this._getActiveSlideIndex(),
      this._getActiveSlideIndex() + 1
    );
  }

  _createNormalSlides() {
    return this._createSlides(
      this._getActiveSlideIndex() - 1,
      this._getActiveSlideIndex(),
      this._getActiveSlideIndex() + 1
    );
  }

  _createSlides(left, center, right) {
    return (
      this._getSinglePriceOffers(left).createSlideTemplate("slide-side") +
      this._getSinglePriceOffers(center).createSlideTemplate("slide-front") +
      this._getSinglePriceOffers(right).createSlideTemplate("slide-side")
    );
  }

  _createCurrentSlider() {
    return this._isSlideLast(this._getActiveSlideIndex())
      ? this._lastSlideSelected()
      : this._isSlideFirst(this._getActiveSlideIndex())
      ? this._firstSlideSelected()
      : this._createNormalSlides();
  }

  _generateSlider() {
    let container = document.querySelector(".container");
    this._clearSlider(container);
    container.firstElementChild.innerHTML += this._createCurrentSlider();
    container.innerHTML += this._createDottedMenu();
  }

  _clearSlider(container) {
    if (container.children.length > 1) {
      container.firstElementChild.innerHTML = "";
      container.removeChild(container.lastElementChild);
    }
  }

  _selectSlide(dot) {
    dot.onclick = (e) => {
      if (!e.target.classList.contains("active")) {
        this._setActiveSlideIndex(parseInt(e.target.classList[1]));
        this._generateSlider();
      }
    };
  }

  _addSelectListener() {
    const dotts = document.querySelectorAll(".dot");
    dotts.forEach((element) => this._selectSlide(element));
  }

  _startEventListener() {
    document.querySelector("body").addEventListener(
      "click",
      function () {
        slider._addSelectListener();
      },
      false
    );
  }
}
