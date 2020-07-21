const AbstractAdapter = require("../abstract-adapter");
const createGrid = require("./create-grid");

module.exports = class ServosAdapter extends AbstractAdapter {
  constructor() {
    super();
    this.GRID = createGrid();
  }

  enable(node, column) {
    // remove conditionals when all servos are defined
    if (column === 5 && node === "d") {
      const { servo, enabling } = this.GRID[column][node];
      servo[enabling.method](...enabling.params);
    }
  }

  disable(node, column) {
    // remove conditionals when all servos are defined
    if (column === 5 && node === "d") {
      const { servo, disabling } = this.GRID[column][node];
      servo[disabling.method](...disabling.params);
    }
  }

  handle(patterns) {
    patterns.forEach((number, column) => {
      number.enabled.forEach((node) => this.enable(node, column));
      number.disabled.forEach((node) => this.disable(node, column));
    });
  }
};
