const NODE_NAMES = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
};

const { A, B, C, D, E, F, G } = NODE_NAMES;

const NUMBER_PATTERNS = [
  /* 0 */ [A, B, C, D, E, F],
  /* 1 */ [B, C],
  /* 2 */ [A, B, G, E, D],
  /* 3 */ [A, B, G, C, D],
  /* 4 */ [F, B, G, C],
  /* 5 */ [A, F, G, C, D],
  /* 6 */ [A, F, G, E, D, C],
  /* 7 */ [A, B, C],
  /* 8 */ [A, B, C, D, E, F, G],
  /* 9 */ [A, B, C, D, F, G],
];

module.exports = class Display {
  constructor(DisplayAdapter) {
    this.adapter = new DisplayAdapter();

    this.getDiff = this.getDiff.bind(this);
    this.getPattern = this.getPattern.bind(this);
    this.render = this.render.bind(this);
  }

  getDiff(enabled) {
    return Object.values(NODE_NAMES).filter((n) => !enabled.includes(n));
  }

  getPattern(number) {
    const enabled = NUMBER_PATTERNS[number];
    const disabled = this.getDiff(enabled);
    return { enabled, disabled };
  }

  render(time) {
    const timePatterns = time.split("").map(this.getPattern);
    this.adapter.handle(timePatterns);
  }
};
