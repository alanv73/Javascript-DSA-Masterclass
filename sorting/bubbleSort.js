{
    const swap = (arr, i1, i2) => { [arr[i1],arr[i2]] = [arr[i2],arr[i1]];}

    function bubbleSort(arr){
        for(let i = arr.length; i > 0; i--){
            var swapped = false;
            for(let j = 0; j < i - 1; j++){
                if(arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if(!swapped) return arr;
        }
        return arr;
    }

bubbleSort([12,5,42,3,10,25,6,18,21,36])
}


