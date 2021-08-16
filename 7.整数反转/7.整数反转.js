/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return 0
    } else if (x > 0) {
        let str = x.toString()
        str = str.split("").reverse().join("")
        str = str.replace(/\b(0+)/gi, "")
        if (str > 2147483647) {
            return 0
        } else {
            return str
        }
    } else if (x < 0) {
        let str = x.toString()
        str = str.slice(1).split("").reverse().join("")
        str = "-" + str
        if (str < -2147483648) {
            return 0
        } else {
            return str
        }
    }
};
// @lc code=end

