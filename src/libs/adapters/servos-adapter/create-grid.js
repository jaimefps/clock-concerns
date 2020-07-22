/**
 * Servos in Tessel.io can only be instantiated after board.on("ready").
 * We call createGrid() in a constructor invoked after board.on("ready") has executed.
 */
const { Servo } = require("johnny-five");

const CHANGE_RATE_PARAMS = [1000, 50];

const DEGREE_90 = {
  method: "center",
  params: CHANGE_RATE_PARAMS,
};

const DEGREE_0 = {
  method: "min",
  params: CHANGE_RATE_PARAMS,
};

const DEGREE_180 = {
  method: "max",
  params: CHANGE_RATE_PARAMS,
};

const orientation = {
  a: {
    enabling: DEGREE_90,
    disabling: DEGREE_0,
  },
  b: {
    enabling: DEGREE_90,
    disabling: DEGREE_0,
  },
  c: {
    enabling: DEGREE_90,
    disabling: DEGREE_180,
  },
  d: {
    enabling: DEGREE_90,
    disabling: DEGREE_180,
  },
  e: {
    enabling: DEGREE_90,
    disabling: DEGREE_0,
  },
  f: {
    enabling: DEGREE_90,
    disabling: DEGREE_180,
  },
  g: {
    enabling: DEGREE_90,
    disabling: DEGREE_180,
  },
};

const createGrid = () => ({
  5: {
    a: {
      ...orientation.a,
      servo: new Servo({ pin: 2 }),
    },
    b: {
      ...orientation.b,
      servo: new Servo({ pin: 3 }),
    },
    c: {
      ...orientation.c,
      servo: new Servo({ pin: 4 }),
    },
    d: {
      ...orientation.d,
      servo: new Servo({ pin: 5 }),
    },
    e: {
      ...orientation.e,
      servo: new Servo({ pin: 6 }),
    },
    f: {
      ...orientation.f,
      servo: new Servo({ pin: 7 }),
    },
    g: {
      ...orientation.g,
      servo: new Servo({ pin: 8 }),
    },
  },
});

module.exports = createGrid;
