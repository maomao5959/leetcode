/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function (n) {
    var arr = new Array(n)
    var i = arr.length
    while (i--) { arr[i] = i + 1 }
    var fn = function (num) {
        switch (true) {
            case num % 3 === 0 && num % 5 !== 0: return 'Fizz';
            case num % 5 === 0 && num % 3 !== 0: return 'Buzz';
            case num % 3 === 0 && num % 5 === 0: return 'FizzBuzz';
            default: return num + ''
        }
    }
    return arr = arr.map(v => {
        return fn(v)
    })
};
// @lc code=end

