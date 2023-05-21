const functions = require('../../../specs/documentation/jest_example')

test('addition works', () => {
  expect(functions.sum(1, 2)).toBe(4)
})