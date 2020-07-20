const Transition = require("./Transition");

module.exports = class Painter {
  constructor() {
    this.transition = new Transition();

    this.patterns = [
      /* 0 */ ["a", "b", "c", "d", "e", "f"],
      /* 1 */ ["b", "c"],
      /* 2 */ ["a", "b", "g", "e", "d"],
      /* 3 */ ["a", "b", "g", "c", "d"],
      /* 4 */ ["f", "g", "b", "c"],
      /* 5 */ ["a", "f", "g", "c", "d"],
      /* 6 */ ["a", "f", "g", "e", "d", "c"],
      /* 7 */ ["a", "b", "c"],
      /* 8 */ ["a", "b", "c", "d", "e", "f", "g"],
      /* 9 */ ["a", "b", "c", "d", "f", "g"],
    ];
  }

  findPatternDiff(subset) {
    const allNodes = ["a", "b", "c", "d", "e", "f", "g"];
    return allNodes.filter((n) => !subset.includes(n));
  }

  paint(column, number) {
    this.patterns[number].forEach((node) =>
      this.transition.enable(column, node)
    );
    this.findPatternDiff(this.patterns[number]).forEach((node) =>
      this.transition.disable(column, node)
    );
  }
};
