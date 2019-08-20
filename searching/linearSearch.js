// accept array of values and a single value. Loop through the array and check if the 
// current array element is equal to the value. If it is, return the index at which the
// element is found. Return -1 if not found.

function linearSearch(arr, val){
    if(arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([4,11,7,1,9,15,3,8,2,18,12], 3);
linearSearch(states, "Pennsylvania");
