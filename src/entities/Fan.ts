import { IDevice } from "../interfaces/IDevice";

export class Fan implements IDevice {
  on() {
    console.log('Fan is on');
  }
  off() {
    console.log('Fan is off');
  }

  broken() {
    console.log('Fan is broken');
  }
}