# Arduino Clock

## Required to operate

- Install Node v10

## Setup Local Dev (Arduino)

Setup Arduino to accept NodeJs execution:

1. Open Arduino Editor
2. Go to `File` > `Examples` > `Firmata` > `StandardFirmata`
3. Upload `StandardFirmata` code to the Arduino

Now you can run Javascript code in Arduino: `$ npm run start:arduino`

## Setup Local Dev (Tessel2)

No setup required. Just run: `$ npm run start:tessel`

## Main Class Dependencies

- johnny-five board: https://github.com/rwaldron/johnny-five/blob/c81033f4795838c7132114cfe9d0a8993c39ab5f/lib/board.js
- johnny-five servo (single): https://github.com/rwaldron/johnny-five/blob/c81033f4795838c7132114cfe9d0a8993c39ab5f/lib/servo.js
- johnny-five servo (array): https://github.com/rwaldron/johnny-five/blob/master/lib/servo.js#L541
