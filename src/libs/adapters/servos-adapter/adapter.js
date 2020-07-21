const AbstractAdapter = require("../abstract-adapter");

module.exports = class ServosAdapter extends AbstractAdapter {
  constructor(grid) {
    super();
    this.grid = grid;
  }

  disable(node, column) {
    // remove conditionals when all servos are defined
    if (column === 5 && node === "d") {
      const { servo, disabling } = this.grid[column][node];
      servo[disabling.method](...disabling.params);
    }
  }

  enable(node, column) {
    // remove conditionals when all servos are defined
    if (column === 5 && node === "d") {
      const { servo, enabling } = this.grid[column][node];
      servo[enabling.method](...enabling.params);
    }
  }

  handle(patterns) {
    patterns.forEach((number, column) => {
      // these commands execute asynchronously,
      // so we won't have a perceptible delay by running the code like this:
      number.enabled.forEach((node) => this.enable(node, column));
      number.disabled.forEach((node) => this.disable(node, column));
    });
  }
};
