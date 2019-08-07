// ***** my solution *****
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i;
//         let temp = arr[j];
//         while (j > 0 && arr[j - 1] > temp) {
//             arr[j] = arr[j - 1]
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }

// ***** colt's solution *****
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if(arr[j] > currentVal){
                arr[j + 1] = arr[j]
            }
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}


insertionSort([12, 5, 42, 3, 10, 25, 6, 18, 21, 36]);


