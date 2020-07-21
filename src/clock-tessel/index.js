const j5 = require("johnny-five");
const Tessel = require("tessel-io");
const Clock = require("../libs/clock");
const ServosAdapter = require("../libs/adapters/servos-adapter");

const board = new j5.Board({
  io: new Tessel(),
});

board.on("ready", () => {
  const clock = new Clock(ServosAdapter);
  clock.init();
});
