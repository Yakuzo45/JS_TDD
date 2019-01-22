'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(int1, int2) {
    if (int1 == 0 || int2 == 0) {
        return 0;
    }
    if (int1 < 0) {
        let i = int1;
        let result = 0;
        while(i < 0) {
            result -= int2;
            i++;
        }
        return result;
    } else if (int2 < 0) {
        let i = int2;
        let result = 0;
        while(i < 0) {
            result -= int1
            i++
        }
        return result;
    } else {
        let result = 0;
        for (let i = 1; i <= int2; i++) {
            result += int1;
        }
        return result;
    }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
