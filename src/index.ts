export class ExtendableString {
  #transformFn: (str: string) => string
  #value: string

  constructor(raw: string, transformFn: (str: string) => string) {
    this.#transformFn = transformFn
    this.#value = transformFn(raw)
  }

  get value(): string {
    return this.#value
  }

  set value(newValue: string) {
    this.#value = this.#transformFn(newValue)
  }

  toString(): string {
    return this.#value
  }
}
