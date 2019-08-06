var swap = (arr, i1, i2) => { [arr[i1],arr[i2]] = [arr[i2],arr[i1]];}

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIdx = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]) minIdx = j;
        }
        if(i !== minIdx) swap(arr, i, minIdx);
    }
    return arr;
}

selectionSort([12,5,42,3,10,25,6,18,21,36]);