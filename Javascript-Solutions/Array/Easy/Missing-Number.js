//https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    let n=nums.length;
    let sum=n *(n+1)/2;
    let arraySum=0
    
    for(let i=0;i<nums.length;i++){
        arraySum+=nums[i];
    }
    return sum-arraySum;
};
