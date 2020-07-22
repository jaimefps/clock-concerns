const AbstractAdapter = require("../abstract-adapter");

module.exports = class LedAdapter extends AbstractAdapter {
  constructor(grid) {
    super();
    this.grid = grid;
  }

  disable(nodeName, column) {
    // remove conditional once more columns are supported:
    if (column === 5) {
      const { node, disabling } = this.grid[column][nodeName];
      node[disabling.method](...disabling.params);
    }
  }

  enable(nodeName, column) {
    // remove conditional once more columns are supported:
    if (column === 5) {
      const { node, enabling } = this.grid[column][nodeName];
      node[enabling.method](...enabling.params);
    }
  }

  handle(patterns) {
    patterns.forEach((numPattern, column) => {
      numPattern.enabled.forEach((node) => this.enable(node, column));
      numPattern.disabled.forEach((node) => this.disable(node, column));
    });
  }
};
