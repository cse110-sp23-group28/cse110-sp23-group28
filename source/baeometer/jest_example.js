/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam
 * Description: Example file to demonstrate Jest.
 */

/**
 * Adds a and b
 * @param {number} a the number a
 * @param {number} b the number b
 * @returns {number} sum of a and b
 */
function sum(a, b) {
    return a + b
}


function bruh(a, b) {
    return 'String bruh';
}

if (typeof module !== 'undefined') {
    module.exports.sum = sum
}


// # Example Test

// ```
// const functions = require('../jest_example')

// test('addition works', () => {
//   expect(functions.sum(1, 2)).toBe(3)
// })
// ```