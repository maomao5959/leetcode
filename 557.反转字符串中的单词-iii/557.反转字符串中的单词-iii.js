/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");
  s = s.map((v) => {
    v = v.split("").reverse().join("");
    return v;
  });
  return s.join(" ");
};
// @lc code=end
