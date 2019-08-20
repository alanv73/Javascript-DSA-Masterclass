// Given a sorted array of integers, write a function
// called search that accepts a value and returns the
// index where the value passed to the functions is
// located. If the value is not found, return -1.

// ***** binary search O(log N) *****
function search(arr, num){
    let low = 0;
    let hi = arr.length - 1;
    
    while (low <= hi ){
        let mid = Math.ceil((hi + low) / 2);
        if(arr[mid] === num){
            return mid;
        } else if (num > arr[mid]){
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

search([1,2,3,4,5,6,8,9,12,15,16,29], 15);
