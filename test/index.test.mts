import { describe, test, assert } from 'vitest'
import { UpperCaseString } from './UpperCaseString.mjs'

describe('🧪 extendable-string tests 🧪', () => {
  test('#1 should return ""', () => {
    // @ts-expect-error
    const test = new UpperCaseString()
    assert.equal(test.value, '')
  }) // #1

  test('#2 should return ""', () => {
    const test = new UpperCaseString('')
    assert.equal(test.value, '')
  }) // #2

  test('#3 should return "AAAA"', () => {
    const test = new UpperCaseString('aaaa')
    assert.equal(test.value, 'AAAA')
  }) // #3

  test('#4 should return "HELLO WORLD"', () => {
    const test = new UpperCaseString('aaaa')
    test.value = 'hello world'
    assert.equal(test.value, 'HELLO WORLD')
  }) // #4
})
