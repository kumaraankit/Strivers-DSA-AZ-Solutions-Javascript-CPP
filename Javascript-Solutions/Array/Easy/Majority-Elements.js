//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    let majority;
    let count=0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1])
            {
                count++
            }
    }
        return nums[i]
    
};
