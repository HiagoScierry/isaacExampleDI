import { IDevice } from "../interfaces/IDevice";

export class UseDevice {
  private device: IDevice;

  constructor(device: IDevice) {
    this.device = device;
  }

  turnOn() {
    this.device.on();
  }
  turnOff() {
    this.device.off();
  }

  brokenDevice() {
    this.device.broken();
  }
}
