'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str) {
    return str[0] + str[1];
}

function keepLast(str) {
    return str[str.length-2] + str[str.length-1];
}

function keepFirstLast(str) {
    return str.substr(2,2);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('Clairement'), 'Cl')
assert.strictEqual(keepLast('Clairement'), 'nt')
assert.strictEqual(keepFirstLast('Clairement'), 'ai')
// End of tests */
