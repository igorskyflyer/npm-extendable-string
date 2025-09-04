// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * Abstract class that provides advanced string manipulation capabilities with custom transformations.
 *
 * This class is intended to be **extended** rather than instantiated directly.
 */
export abstract class ExtendableString {
  #transformFn: (str: string) => string
  #value: string

  /**
   * Creates an ExtendableString instance.
   *
   * @param raw - The string input to transform.
   * @param transformFn - The transformation function to apply to the string.
   * @throws Will throw an error if the transformation function is not supplied.
   */
  constructor(raw: string, transformFn: (str: string) => string) {
    if (typeof transformFn !== 'function') {
      throw new Error('Invalid string transformation function.')
    }

    this.#transformFn = transformFn
    this.#value = transformFn(raw ?? '')
  }

  /**
   * Gets the transformed string value.
   * @returns The transformed string.
   */
  get value(): string {
    return this.#value
  }

  /**
   * Sets a new value, automatically applying the transformation.
   * @param newValue - The new value to assign.
   */
  set value(newValue: string) {
    if (typeof newValue !== 'string') {
      return
    }

    this.#value = this.#transformFn(newValue)
  }

  /**
   * Gets the transformed string value.
   * @returns The transformed string.
   */
  toString(): string {
    return this.#value
  }
}
