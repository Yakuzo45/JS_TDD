'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(str) {
    return str.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('Je suis une brebis'), 'je suis une brebis')
assert.strictEqual(whisper('JE SUIS UNE BREBIS'), 'je suis une brebis')
assert.strictEqual(whisper('On fait DES TESTS un peu DANS TOUS les SENS'), 'on fait des tests un peu dans tous les sens')
// End of tests */
