'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    let tab = str.split(" ");
    let result = tab.map(x => x.substr(0,1).toUpperCase() + x.substr(1));
    return result.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('I hope your all family is having a nice christmas !'), 'I Hope Your All Family Is Having A Nice Christmas !')


// End of tests */
