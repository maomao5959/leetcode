/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, ''),
        reStr = "";
    str = str.toLocaleLowerCase()
    reStr = str.split('').reverse().join('')
    if (str == reStr) {
        return true
    } else {
        return false
    }
};
// @lc code=end

