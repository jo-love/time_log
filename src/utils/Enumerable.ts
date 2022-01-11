export default class Enumerable {
  code: string;
  name: string;
  img?: string;

  constructor(code: string, name: string, img?: string, timer?: number) {
    this.code = code;
    this.name = name;
    this.img = img;
  }

  public getName?() {
    return {
      value: this.code,
      label: this.name,
    };
  }
}
