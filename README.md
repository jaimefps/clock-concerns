# Clock

## Description

A small repo for working through musings on "separation of concerns". The intent is to see how much code can be reused across different execution environments for a Javascript Clock program.

## Helpful Documentation

| Dependency                 | Docs                                                                  |
| -------------------------- | --------------------------------------------------------------------- |
| johnny-five                | http://johnny-five.io/api/                                            |
| johnny-five board          | https://github.com/rwaldron/johnny-five/blob/                         |
| johnny-five servo (single) | https://github.com/rwaldron/johnny-five/                              |
| johnny-five servo (array)  | https://github.com/rwaldron/johnny-five/blob/master/lib/servo.js#L541 |
| universal-transition       | https://www.npmjs.com/package/universal-transition                    |

## Required to operate

- Node.js v 12.18.0

#### IMPORTANT

Change your Node.js version before running `npm install`.
Executions may break of if you change Node.js version after installing dependencies.

## Setup Web Clock

1. Install dependencies: `npm install`
2. Run web clock with: `npm run start:web`

## Setup Arduino Clock

1. Install dependencies: `npm install`
2. Open Arduino Editor on your machine.
3. Go to `File` > `Examples` > `Firmata` > `StandardFirmataPlus`
4. Upload `StandardFirmataPlus` code into the Arduino.
5. Run arduino clock with: `npm run start:arduino`

## Setup Tessel2 Clock

1. Install dependencies: `npm install`
2. Install t2 CLI: `npm install -g t2-cli`
3. Run tessel clock with: `npm run start:tessel`

#### IMPORTANT

You may see a long list of WARN and ERR logs when the `Building` stage begins. Wait about a minute before killing the process. Many of these errors can be ignored. There seem to be missing some unused dependencies regarding `@serialport/bindings`.

![alt text](assets/readme/ignore-error-log.png)

## TODO

- Arduino Servo Clock Diagrams
- Tessel2 Servo Clock Diagrams
- Arduino and Tessel2 LED Clocks
