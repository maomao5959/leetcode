/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  let arr = s.split("");
  for (let index = 0; index < arr.length; index++) {
    arr.push(arr.shift());
    if (arr.join("") === goal) return true;
  }
  return false;
};
// @lc code=end
