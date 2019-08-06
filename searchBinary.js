// function accepts a sorted array and a value.
// Return the index in the array where the value is found or -1 if not found.

function binSearch(arr, val){
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(val === arr[mid]) return mid;
        else if(val > arr[mid]) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

binSearch([9,10,12,22,29,34,38,43,56,67], 43)