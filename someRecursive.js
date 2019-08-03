// function accepts an array and a callback, it returns true if a single value in the array
// returns true when passed to the callback, otherwise returns false.
//
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
//
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10) // false

//const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback){
    if(arr.length < 1) return false;
    return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

someRecursive([4,6,8], val => val < 10) // false
