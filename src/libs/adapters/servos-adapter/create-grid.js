/**
 * Servos in Tessel.io can only be instantiated after board.on("ready").
 * We call createGrid() in a constructor invoked after board.on("ready") has executed.
 */
const { Servo } = require("johnny-five");

const CHANGE_RATE = [200, 50];
const DEGREE_0 = { method: "min", params: CHANGE_RATE };
const DEGREE_180 = { method: "max", params: CHANGE_RATE };
const DEGREE_90 = { method: "center", params: [] };

const createGrid = () => ({
  5: {
    d: {
      enabling: DEGREE_0,
      disabling: DEGREE_90,
      servo: new Servo({ port: "A", pin: 5 }),
    },
  },
});

module.exports = createGrid;
