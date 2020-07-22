const AbstractAdapter = require("../abstract-adapter");

module.exports = class ServosAdapter extends AbstractAdapter {
  constructor(grid) {
    super();
    this.grid = grid;
  }

  disable(node, column) {
    // remove conditional once more columns are supported:
    if (column === 5) {
      const { servo, disabling } = this.grid[column][node];
      servo[disabling.method](...disabling.params);
    }
  }

  enable(node, column) {
    // remove conditional once more columns are supported:
    if (column === 5) {
      const { servo, enabling } = this.grid[column][node];
      servo[enabling.method](...enabling.params);
    }
  }

  handle(patterns) {
    patterns.forEach((number, column) => {
      number.enabled.forEach((node) => this.enable(node, column));
      number.disabled.forEach((node) => this.disable(node, column));
    });
  }
};
