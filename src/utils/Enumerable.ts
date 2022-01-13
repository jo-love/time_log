export default class Enumerable {
  code: string;
  name: string;
  img?: string;
  startTime?: string;

  constructor(
    code: string,
    name: string,
    img?: string,
    timer?: number,
    startTime?: string,
  ) {
    this.code = code;
    this.name = name;
    this.img = img;
    this.startTime = startTime;
  }

  public getName?() {
    return {
      value: this.code,
      label: this.name,
    };
  }
}
