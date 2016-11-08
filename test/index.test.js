'use strict'
/*
  * chai require
*/
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const should = chai.should()
/*
  * require file test
*/
const Test = require('../controller/controller.index.js')

/*
  * test the function multiple
  * result must be the multiple value of params a & b
*/
describe('Testing Multiple Function', () => {
  var number_a, number_b,
      char_a, char_b,
      char_no_number_a,
      char_no_number_b
  /*
    * assign variable before every test
  */
  beforeEach(function() {
    console.log('assign variable before every test')
    number_a = 3
    number_b = 4
    char_a = '3'
    char_b = '4'
    char_no_number_a = 'a'
    char_no_number_b = 'b'
  });

  it('it should return the multiple value of params a & b (Both params is number)', () => {
    // assert.equal(12, Test.multiple(3, 4))
    expect(Test.multiple(number_a, number_b)).to.equal(12)
  })

  it('it should return the multiple value of params a & b (Both params is char)', () => {
    expect(Test.multiple(char_a, char_b)).to.equal(12)
  })

  it('it should return the value of function multiple (Both params is empty)', () => {
    assert.strictEqual(Test.multiple(), 'no params')
  })

  it('it should return the value of function multiple (Only 1 param exist (number)) ', () => {
    expect(Test.multiple(number_a)).to.equal('only 1 param')
  })

  it('it should return the value of function multiple (Only 1 param exist (char)) ', () => {
    expect(Test.multiple(char_a)).to.equal('only 1 param')
  })

  it('it should return the value of function multiple (Only 1 param exist (char_no_number_a)) ', () => {
    expect(Test.multiple(char_no_number_a)).to.equal('only 1 param')
  })

  it('it should check if the return is NaN or no (Both params is char : a & b)', () => {
    expect(isNaN(Test.multiple(char_no_number_a, char_no_number_b))).to.equal(true)
  })

  it('it should check if the return is NaN or no  (1 Number, 1 Char)', () => {
    expect(isNaN(Test.multiple(number_a, char_b))).to.equal(false)
  })

})
