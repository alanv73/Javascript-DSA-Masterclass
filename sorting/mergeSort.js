function merge(left, right){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        results.push(left[i]);
        i++;    
    }

    while(j < right.length){
        results.push(right[j]);
        j++;    
    }
    
    return results;

}

function mergeSort(arr){

    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);

//     return merge( mergeSort( arr.slice(0,Math.floor(arr.length/2)) ), mergeSort( arr.slice(Math.floor(arr.length/2)) ) );
    
}

// merge([1,10,50], [2,14,99,100]);

// mergeSort([50,100,1,99,10,2,14]);
mergeSort([10,24,76,73,72,1,9]);