/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let sum = 0;
  x = swapNum(x);
  y = swapNum(y);
  if (x.length > y.length) {
    while (x.length > y.length) {
      y = "0" + y;
    }
  } else if (y.length > x.length) {
    while (y.length > x.length) {
      x = "0" + x;
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      sum++;
    }
  }
  return sum;
  function swapNum(num) {
    num = num.toString(2);
    if (num.length < 4) {
      while (num.length < 4) {
        num = "0" + num;
      }
    }
    return num;
  }
};
// @lc code=end
