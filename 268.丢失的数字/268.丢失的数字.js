/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length,
        arr = [],
        res = [];
    for (let i = 0; i < len; i++) {
        arr.push(i + 1)
    }
    res = arr.filter(v => {
        if (!nums.includes(v)) return v;
    })
    if (res.length > 0) {
        return res[0];
    } else {
        return 0
    }
};
// @lc code=end

