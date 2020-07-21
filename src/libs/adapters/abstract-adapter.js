module.exports = class AbstractAdapter {
  constructor() {
    if (new.target === AbstractAdapter) {
      throw new TypeError(
        "Cannot construct AbstractAdapter instances directly"
      );
    }
    if (this.handle === undefined) {
      throw new TypeError("Must override method this.handle");
    }
  }
};
