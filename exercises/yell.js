'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str) {
    return str.toUpperCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('Je suis une brebis'), 'JE SUIS UNE BREBIS')
assert.strictEqual(yell('je suis une brebis'), 'JE SUIS UNE BREBIS')
assert.strictEqual(yell('On fait DES TESTS un peu DANS TOUS les SENS'), 'ON FAIT DES TESTS UN PEU DANS TOUS LES SENS')
// End of tests */
