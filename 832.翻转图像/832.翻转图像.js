/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  image = image
    .map((v) => v.reverse())
    .map((v) => {
      v = v.map((val) => {
        return val === 1 ? 0 : 1;
      });
      return v;
    });
  return image;
};
// @lc code=end
