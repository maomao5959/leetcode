/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index=nums.indexOf(target);
    if(index>-1){
        return index
    }else{
        nums.push(target);
        nums.sort(function(a,b){
            return a-b
        })
       let idx=nums.indexOf(target)
       return idx;
    }

};