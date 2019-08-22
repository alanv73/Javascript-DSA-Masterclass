function insertionSort(arr, comparator){
    if(arr.length < 2) return arr;
    if(!comparator){
        comparator = (a,b) => a - b;
    }

    for(let i = 1; i < arr.length; i++){
        let swapped = false;
        let element = arr[i];
        let j = i - 1;
        while(j >= 0 && comparator(element, arr[j]) < 0){
            arr[j + 1] = arr[j];
            swapped = true;
            j--;
        }
        if(swapped) arr[j + 1] = element;
    }
    return arr;
}

function merge(arr1, arr2, comparator){
    if(typeof comparator !== 'function'){
        comparator = (a,b) => a - b;
    }
    let i = 0;
    let j = 0;
    let newArr = [];
    while(i < arr1.length && j < arr2.length){
        if(comparator(arr1[i], arr2[j]) < 0){
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

function mergeSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = (a,b) => a - b;
    }

    if(arr.length < 2) return arr;

    let start = 0;
    let end = arr.length;
    let mid = Math.floor((arr.length) / 2);
    
    let left = mergeSort(arr.slice(start, mid), comparator);
    let right = mergeSort(arr.slice(mid, end), comparator);

    return merge(left, right, comparator);

}

