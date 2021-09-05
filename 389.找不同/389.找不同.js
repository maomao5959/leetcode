/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    t = t.split('')
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i])
        if (index > -1) {
            t.splice(index, 1)
        }
    }
    return t.toString()
};
// @lc code=end

