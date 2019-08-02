// Write a function called maxSubArraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.
// maxSubArraySum([1,2,5,2,8,1,5], 4) // 17

// ***** naive solution O(N**2) *****
// function maxSubArraySum(arr, num){
//     if(num > arr.length){
//         return null;
//     }

//     var max = -Infinity;
//     for(let i = 0; i < arr.length - num + 1; i++){
//         temp = 0;
//         for(let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }
//         if(temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }


// ***** colt's solution O(N) *****
function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}




maxSubArraySum([2,6,9,2,1,8,5,6,3], 3); // 19