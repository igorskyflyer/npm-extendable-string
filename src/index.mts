/**
 * Allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. You should extend from this class, **NOT** instantiate a new object from it.
 */
export abstract class ExtendableString {
  #transformFn: (str: string) => string
  #value: string

  /**
   * @param {string} raw - the string input to transform
   * @param {(str: string) => string} transformFn - the transformation function to apply to the string
   */
  constructor(raw: string, transformFn: (str: string) => string) {
    this.#transformFn = transformFn
    this.#value = transformFn(raw ?? '')
  }

  /**
   * Returns the transformed string value.
   * @returns {string}
   */
  get value(): string {
    return this.#value
  }

  /**
   * Sets a new value, note, your transformation will automatically be applied.
   * @param {string} newValue - the new value to assign
   */
  set value(newValue: string) {
    this.#value = this.#transformFn(newValue)
  }

  /**
   * Returns the transformed string value.
   * @returns {string}
   */
  toString(): string {
    return this.#value
  }
}
