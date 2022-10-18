// https://leetcode.com/problems/max-consecutive-ones/submissions/

var findMaxConsecutiveOnes = function(nums) {
//     let count=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===nums[i+1] && nums[i]===1){
//             count++
//         }
//     }
//     return count
    
    // Find out the maximum element, then split against zero and finally calculate the length of the consecutive 1s after split
    return Math.max(...nums.join('').split('0').map(x => x.length));

};
