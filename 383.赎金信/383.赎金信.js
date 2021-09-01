/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
    let count = 0;
    magazine = magazine.split("");
    ransomNote = ransomNote.split("");
    ransomNote.forEach((v, i) => {
        let index = magazine.indexOf(v)
        if (index > -1) {
            magazine.splice(index, 1)
            count++
        }
    })
    return count == ransomNote.length
};
// @lc code=end

