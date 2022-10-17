//https://leetcode.com/problems/sort-colors/


var sortColors = function(nums) {
//     let red=[]
//     let white=[]
//     let blue=[]
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){
//             red.push(nums[i])
//         }
//         else if(nums[i]===1){
//             white.push(nums[i])
//         }
//         else
//             blue.push(nums[i])
//     }
    
//     return red.concat(white,blue)
    

  
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
              [nums[i],nums[j]]=[nums[j],nums[i]]
            }
        }
    }
    return nums;
    
};
