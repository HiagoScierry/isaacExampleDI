import { UseDevice } from "./src/useCase/useDevice";

import { Fan } from "./src/entities/Fan";
import { Lamp } from "./src/entities/Lamp";
import { PC } from "./src/entities/PC";

const fan = new Fan();
const lamp = new Lamp();
const pc = new PC();

new UseDevice(fan).turnOn();
new UseDevice(fan).turnOff();
new UseDevice(fan).brokenDevice();

console.log('------------------');


new UseDevice(lamp).turnOn();
new UseDevice(lamp).turnOff();
new UseDevice(lamp).brokenDevice();

console.log('------------------');

new UseDevice(pc).turnOn();
new UseDevice(pc).turnOff();
new UseDevice(pc).brokenDevice();

console.log('------------------');
