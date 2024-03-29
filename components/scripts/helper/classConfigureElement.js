export default class ConfigureElement {
  constructor() {
    this.zIndex = "1";
    this.position = "absolute";
    this.left = "0px";
    this.top = "0px";
    this.height = "0px";
    this.width = "0px";
    this.border = "none";
  }

  add(key, value) {
    this[key] = value;
  }

  remove(key) {
    delete this[key];
  }

  convertTo(element) {
    for (let index = 0; index < Object.keys(this).length; index++) {
      const currentKey = Object.keys(this)[index];
      const currentValue = Object.values(this)[index];
      element.style[currentKey] = currentValue;
    }
  }

  show() {
    console.log(this);
  }
}

// ResetElement has methods add(),remove(),show(),convertTo(element)
