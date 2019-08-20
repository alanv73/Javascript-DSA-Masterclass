function radixSort(arr){
    let getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    let digitCount = (num) => {
        if(num === 0) return 0;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
        }
    let mostDigits = (arr) => digitCount(Math.max(...arr));

    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let currentDigit = getDigit(arr[i], k);
            digitBuckets[currentDigit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    
    return arr;
}

// getDigit(12345678910, 10);
radixSort([100,3,22,14,162,91,1123,25,515,3121,213]);