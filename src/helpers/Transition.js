const tessel = require("tessel");
// hardware
module.exports = class Transition {
  enable(column, node) {
    console.log("enable:column:", column, ":node:", node);
  }
  disable(column, node) {
    console.log("disable:column:", column, ":node:", node);
  }
};
