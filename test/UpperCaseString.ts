import { ExtendableString } from '../src/index.mjs'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}
