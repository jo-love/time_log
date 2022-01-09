export default class Enumerable {
  code: string;
  name?: string;
  img?: string;

  constructor(code: string, name?: string, img?: string) {
    this.code = code;
    this.name = name;
    this.img = img;
  }

  public getName() {
    return {
      value: this.code,
      label: this.name,
    };
  }
  public getImg() {
    return {
      value: this.code,
      src: this.img,
    };
  }
}
