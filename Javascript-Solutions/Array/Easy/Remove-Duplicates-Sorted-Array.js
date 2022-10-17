// https://leetcode.com/problems/remove-duplicates-from-sorted-array

var removeDuplicates = function(nums) {
     let result=0
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==nums[i+1]){
              nums[result++]=nums[i]
            }
        }
        return result
};
