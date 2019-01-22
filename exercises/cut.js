'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(str) {
    return str.substr(2);
}

function cutLast(str) {
    str = str.substr(0,str.length-2);
    return str;
}

function cutFirstLast(str) {
    let str1 = str.substr(2);
    let str2 = str1.substr(0,str1.length-2);
    return str2;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('Mozilla'), 'zilla')
assert.strictEqual(cutLast('Mozilla'), 'Mozil')
assert.strictEqual(cutFirstLast('Mozilla'), 'zil')

// End of tests */
