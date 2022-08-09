/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let arr = [],
    obj = {};
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  s1.forEach((v) => {
    if (!s2.includes(v)) {
      if (obj[v]) {
        obj[v]++;
      } else {
        obj[v] = 1;
      }
    }
  });
  s2.forEach((v) => {
    if (!s1.includes(v)) {
      if (obj[v]) {
        obj[v]++;
      } else {
        obj[v] = 1;
      }
    }
  });
  Object.keys(obj).forEach((v) => {
    if (obj[v] === 1) {
      arr.push(v);
    }
  });
  return arr;
};
// @lc code=end
