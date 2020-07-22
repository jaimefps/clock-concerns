/**
 * Led in Tessel.io can only be instantiated after board.on("ready").
 * We call createGrid() in a constructor invoked after board.on("ready") has executed.
 */
const { Led } = require("johnny-five");

const COMMONS = {
  enabling: { method: "on", params: [] },
  disabling: { method: "off", params: [] },
};

const createGrid = () => ({
  5: {
    a: { ...COMMONS, node: new Led(2) },
    b: { ...COMMONS, node: new Led(3) },
    c: { ...COMMONS, node: new Led(4) },
    d: { ...COMMONS, node: new Led(5) },
    e: { ...COMMONS, node: new Led(6) },
    f: { ...COMMONS, node: new Led(7) },
    g: { ...COMMONS, node: new Led(8) },
  },
});

module.exports = createGrid;
