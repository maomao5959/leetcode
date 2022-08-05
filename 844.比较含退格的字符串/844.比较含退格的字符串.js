/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  s = strSplice(s);
  t = strSplice(t);
  function strSplice(str) {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#" && i !== 0) {
        str.splice(i - 1, 2);
        i = -1;
      } else if (str[i] === "#" && i === 0) {
        str.splice(i, 1);
        i = -1;
      }
    }
    return str.join("");
  }
  return s === t;
};
// @lc code=end
