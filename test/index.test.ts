import { assert as chai } from 'chai'
import { UpperCaseString } from './UpperCaseString'

describe('🧪 extendable-string tests 🧪', () => {
  it('#1 should return "AAAA"', () => {
    const test = new UpperCaseString('aaaa')
    chai.equal(test.value, 'AAAA')
  }) // #1

  it('#2 should return "HELLO WORLD"', () => {
    const test = new UpperCaseString('aaaa')
    test.value = 'hello world'
    chai.equal(test.value, 'HELLO WORLD')
  }) // #2
})
