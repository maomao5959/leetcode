/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} 
 * @return {boolean}
 */
var checkRecord = function (s) {
  let index = s.indexOf("LLL");
  let idx = s.indexOf("A");
  let lastIdx = s.lastIndexOf("A");
  if (index > -1) {
    return false;
  }
  if (idx !== lastIdx) {
    return false;
  }
  return true;
};
// @lc code=end
