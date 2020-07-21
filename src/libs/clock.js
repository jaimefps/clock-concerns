const moment = require("moment");

module.exports = class Clock {
  constructor(display) {
    this.display = display;
  }

  init() {
    setInterval(() => {
      const time = moment().format("hhmmss");
      this.display.render(time);
    }, 1000);
  }
};
