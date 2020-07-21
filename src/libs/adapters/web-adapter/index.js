import transition from "universal-transition";
import AbstractAdapter from "../abstract-adapter";

export default class WebAdapter extends AbstractAdapter {
  getColId(column) {
    return ["one", "two", "three", "four", "five", "six"][column];
  }

  disable(node, column) {
    transition(
      document.querySelector(`#${this.getColId(column)} .${node}`),
      { backgroundColor: "black" },
      { timingFunction: "linear", duration: 1000 }
    );
  }

  enable(node, column) {
    transition(
      document.querySelector(`#${this.getColId(column)} .${node}`),
      { backgroundColor: "white" },
      { timingFunction: "linear", duration: 1000 }
    );
  }

  handle(patterns) {
    patterns.forEach((number, column) => {
      number.enabled.forEach((node) => this.enable(node, column));
      number.disabled.forEach((node) => this.disable(node, column));
    });
  }
}
