/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                nums.splice(j,1)
                //关键是删除了一个数组项以后，下标要往前移动一位，所以要j--
                j--
            }
        }
    }
};