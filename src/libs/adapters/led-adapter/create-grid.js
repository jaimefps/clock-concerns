/**
 * Led in Tessel.io can only be instantiated after board.on("ready").
 * We call createGrid() in a constructor invoked after board.on("ready") has executed.
 */
const { Led } = require("johnny-five");

const COMMONS = {
  enabling: {
    method: "on",
    params: [],
  },
  disabling: {
    method: "off",
    params: [],
  },
};

const createGrid = () => ({
  5: {
    a: { ...COMMONS, servo: new Led(2) },
    b: { ...COMMONS, servo: new Led(3) },
    c: { ...COMMONS, servo: new Led(4) },
    d: { ...COMMONS, servo: new Led(5) },
    e: { ...COMMONS, servo: new Led(6) },
    f: { ...COMMONS, servo: new Led(7) },
    g: { ...COMMONS, servo: new Led(8) },
  },
});

module.exports = createGrid;
