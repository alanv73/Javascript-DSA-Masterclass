// Implement a function called countUniqueValues,
// which accepts a sorted array and counts the
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.


// ***** my solution *****
// function countUniqueValues(arr){
//     if(arr.length < 2){
//         return arr.length;
//     }
    
//     let left = 0;
//     let right = 1;

//     while(right < arr.length){
//         if(arr[left] !== arr[right]){
//             left++;
//             arr[left] = arr[right];
//             right++;
//         } else {
//             right++;
//         }
//     }

//     return left + 1;
// }


// ***** colt's solution *****
function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    var i = 0;
    for(j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);