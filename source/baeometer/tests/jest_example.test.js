const functions = require('../jest_example')

test('addition works', () => {
  expect(functions.sum(1, 2)).toBe(3)
})