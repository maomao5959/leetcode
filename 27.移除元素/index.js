/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            //关键在于删除一个数组项以后要把i--，因为index已经发生的改变。
            i--
        }
    }
    return nums.length;
   
};