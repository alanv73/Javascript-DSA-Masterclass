// given a variable number of arguments, check whether there are
// any duplicates among the passed in arguments. Solve using frequency pattern or
// muliple points pattern
// areThereDuplicates(1,2,3); // false
// areThereDuplicates(1,2,2); // true
// areThereDuplicates('a','b','c','a'); // true

function areThereDuplicates(...arr){
    let frequency = {};

    for(var i of arr){
        if (frequency[i]){
            return true;
        } else {
            frequency[i] = 1;
        }

    }
    return false;
}


console.log(areThereDuplicates('a', 'b', 'c', 'g', 'b', 'f'));
console.log(areThereDuplicates(1,5,8,6,7,11,4,3));