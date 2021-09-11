/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function (nums) {
    let len = nums.length,
        res = [];
    for (let i = 0; i < len; i++) {
        if (!nums.includes(i + 1)) {
            res.push(i + 1)
        }
    }
    return res;
};
// @lc code=end

