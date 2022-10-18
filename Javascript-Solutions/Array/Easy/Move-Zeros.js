//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    
//     let x1=[]
//     let x2=[]
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             x2.push(nums[i])
//         }
//         else x1.push(nums[i])
//     }
    
//     return x2.concat(x1);
    
     let c = 0 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
	  // swap elements
      [nums[c], nums[i]] = [nums[i], nums[c]]
      c++
    }
  }
};
