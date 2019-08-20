// function takes an array of strings and capitalizes the first letter of each string in the array
//
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr){
    let newArr = [];
    if(arr.length === 0) return [];
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return newArr.concat(capitalizeFirst(arr.slice(1)));
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
