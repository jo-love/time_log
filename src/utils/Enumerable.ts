export default class Enumerable {
  code: string;
  name: string;
  img?: string;
  // startTime?: string;
  // endTime?: string;
  timer?: number;

  constructor(
    code: string,
    name: string,
    img?: string,
    // startTime?: string,
    // endTime?: string,
    timer?: number,
  ) {
    this.code = code;
    this.name = name;
    this.img = img;
    // this.startTime = startTime;
    // this.endTime = endTime;
    this.timer = timer;
  }

  public getName?() {
    return {
      value: this.code,
      label: this.name,
    };
  }
}
