const j5 = require("johnny-five");
const Clock = require("../libs/clock");
const TransitionMeat = require("../libs/adapters/servos-adapter");

const board = new j5.Board();

board.on("ready", () => {
  const clock = new Clock(TransitionMeat);
  clock.init();
});
