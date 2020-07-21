const j5 = require("johnny-five");
const Tessel = require("tessel-io");
const Clock = require("../libs/clock");
const Display = require("../libs/display");
const { ServoAdapter, createGrid } = require("../libs/adapters/servos-adapter");

const board = new j5.Board({
  io: new Tessel(),
});

board.on("ready", () => {
  const grid = createGrid();
  const adapter = new ServoAdapter(grid);
  const display = new Display(adapter);
  const clock = new Clock(display);
  clock.init();
});
