/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = new Set();
    nums2.forEach(v => {
        if (nums1.includes(v)) {
            arr.add(v)
        }
    })
    return [...arr]
};
// @lc code=end

