import { IDevice } from "../interfaces/IDevice";

export class Lamp implements IDevice {
  on() {
    console.log('Lamp is on');
  }
  off() {
    console.log('Lamp is off');
  }

  broken() {
    console.log('Lamp is broken');
  }
}