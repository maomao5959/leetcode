/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result=[];
    for(let i=0;i<nums1.length;i++){
        //通过index Of来判断循环的nums[i]在不在nums2里面，如果找到了。就在结果里面添加然后再nums2里面删除
        let index=nums2.indexOf(nums1[i]);
        if(index>-1){
            result.push(nums1[i]);
            nums2.splice(index,1)
        }
    }
        return result;
        
  };