const moment = require("moment");
const Painter = require("./Painter");

module.exports = class Clock {
  constructor() {
    this.printer = new Painter();
  }

  run() {
    setInterval(() => {
      moment()
        .format("hhmmss")
        .split("")
        .forEach((num, idx) => {
          this.printer.paint(idx, num);
        });
    }, 1000);
  }
};
