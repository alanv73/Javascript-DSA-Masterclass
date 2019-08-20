// function accepts an array of arrays and returns a new array with all values flattened
//
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr){
    let newArr = [];
    function flat(arr){
        arr.forEach(function(el) {
            if(Array.isArray(el)){
                flat(el);  
            } else {
                newArr.push(el);
            }
        });
    };
    flat(arr);
    return newArr;
}

flatten([1, 2, 3, [4, 5] ]); // [1, 2, 3, 4, 5]
