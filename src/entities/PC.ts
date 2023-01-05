import { IDevice } from "../interfaces/IDevice";

export class PC implements IDevice {
  on() {
    console.log("PC is on");
  }
  off() {
    console.log("PC is off");
  }

  broken() {
    console.log("PC is broken");
  }
}
