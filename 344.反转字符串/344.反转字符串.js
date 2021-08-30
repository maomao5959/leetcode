/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = s.length - 1; i >= 0; i--) {
        s.push(s[i])
        s.splice(i, 1)
    }
    return s
};
// @lc code=end

