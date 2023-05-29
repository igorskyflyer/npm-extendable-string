import { ExtendableString } from '../src/index'

export class UpperCaseString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.toUpperCase())
  }
}
