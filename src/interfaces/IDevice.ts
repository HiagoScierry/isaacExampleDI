export interface IDevice {
  on: () => void;
  off: () => void;
  broken: () => void;
}
