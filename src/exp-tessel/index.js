const { Board, Servos } = require("johnny-five");
const Tessel = require("tessel-io");

const board = new Board({
  io: new Tessel(),
});

board.on("ready", () => {
  const servos = new Servos([5]);

  let toggle = false;
  setInterval(() => {
    if (toggle) {
      servos.center();
    } else {
      servos.min(500, 50);
    }
    toggle = !toggle;
  }, 1000);
});
