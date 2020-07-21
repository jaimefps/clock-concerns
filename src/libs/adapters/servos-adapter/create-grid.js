/**
 * Servos in Tessel.io can only be instantiated after board.on("ready").
 * We call createGrid() in a constructor invoked after board.on("ready") has executed.
 */
const { Servo } = require("johnny-five");

const CHANGE_RATE_PARAMS = [200, 50];

const DEGREE_90 = {
  method: "center",
  params: [],
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
  a: {},
  b: {},
  c: {},
  d: {
    enabling: DEGREE_0,
    disabling: DEGREE_90,
  },
  e: {},
  f: {},
  g: {},
};

const createGridArduino = () => ({
  5: {
    d: {
      ...orientation.d,
      // this needs to be abstracted for Arduino vs Tessel:
      servo: new Servo({ port: "A", pin: 5 }),
    },
  },
});

module.exports = createGridArduino;
