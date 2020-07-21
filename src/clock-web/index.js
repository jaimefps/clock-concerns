import Clock from "../libs/clock";
import Display from "../libs/display";
import WebAdapter from "../libs/adapters/web-adapter";

const adapter = new WebAdapter();
const display = new Display(adapter);
const clock = new Clock(display);
clock.init();
