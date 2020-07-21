const moment = require("moment");
const Display = require("./display");

module.exports = class Clock {
  constructor(DisplayAdapter) {
    this.display = new Display(DisplayAdapter);
  }

  init() {
    setInterval(() => {
      const time = moment().format("hhmmss");
      this.display.render(time);
    }, 1000);
  }
};
