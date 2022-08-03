/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let paragraphArr = paragraph.split(/[!\?',;\.' ]+/),
    obj = {},
    max,
    maxNum = 0;
  paragraphArr = paragraphArr
    .map((v) => v.replace(/[^A-Za-z]/g, ""))
    .map((v) => v.toLowerCase());
  if (banned.length) {
    paragraphArr = paragraphArr
      .filter((v) => !banned.includes(v))
      .filter(Boolean);
  }
  paragraphArr.forEach((v) => {
    if (!obj[v]) {
      obj[v] = 1;
    } else {
      obj[v]++;
    }
  });
  let keys = Object.keys(obj);
  keys.forEach((v) => {
    if (obj[v] > maxNum) {
      max = v;
      maxNum = obj[v];
    }
  });
  return max;
};
// @lc code=end
