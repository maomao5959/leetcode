/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return nums = nums.sort((a, b) => { return a - b })[1]
    } else {
        let sortArr = nums.sort((a, b) => { return a - b }),
            count = 0,
            max = 0,
            res = '';
        for (let i = 0; i < sortArr.length; i++) {
            if (sortArr[i] == sortArr[i + 1]) {
                count++
            } else {
                if (count > max) {
                    max = count;
                    count = 0
                    res = sortArr[i]
                }
            }
        }
        return res;
    }

};
// @lc code=end

