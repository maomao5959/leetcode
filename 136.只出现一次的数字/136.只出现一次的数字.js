/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let value;
    nums.forEach((v, i) => {
        if (nums.indexOf(v) === nums.lastIndexOf(v)) {
            value = v
        }
    }
    )
    return value;
};
// @lc code=end

