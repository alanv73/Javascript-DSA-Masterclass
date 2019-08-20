function pivot(arr, start = 0, end = arr.length){
    var swap = (arr, i1, i2) => { [arr[i1],arr[i2]] = [arr[i2],arr[i1]];}

    let pivot = arr[start];
    let swapIndex = start;
    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    if(start != swapIndex) swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

// pivot([5,2,1,8,4,7,6,3]);
// pivot([4,8,2,1,5,7,6,3]);
quickSort([100,-3,2,4,6,9,1,2,5,3,23]);