
class ExtendableString extends String {
  private transformFn: (str: string) => string;

  constructor(value: string, transformFn: (str: string) => string) {
    super(value);
    this.transformFn = transformFn;
  }

  toString(): string {
    return this.transformFn(this.valueOf());
  }
}
