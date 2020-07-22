const j5 = require("johnny-five");
const Clock = require("../libs/clock");
const Display = require("../libs/display");
const { LedAdapter, createGrid } = require("../libs/adapters/led-adapter");

const board = new j5.Board();

board.on("ready", () => {
  const grid = createGrid();
  const adapter = new LedAdapter(grid);
  const display = new Display(adapter);
  const clock = new Clock(display);
  clock.init();
});
