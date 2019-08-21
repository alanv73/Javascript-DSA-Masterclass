// given an array of 1s & 0s which has all 1s first followed by all 0s, write a function called
// countZeroes which returns the number of zeroes in the array
// divide & conquer
function countZeroes(arr){
    if(arr.length === 0) return 0;
    let start = 0;
    let end = arr.length;
    let mid;
    while(start < end){
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === 1){
            if(mid + 1 >= arr.length) return arr.length - (mid - 1);
            start = mid + 1;
        } else {
            if(arr[mid - 1] === 1) return arr.length - mid;
            end = mid;
        }
    }
    return arr.length;
}

// given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array

function sortedFrequency(arr, num){
    if(arr.length === 0) return 0;
    let start = 0;
    let end = arr.length;
    let mid;
    let foundAt = Infinity;
    let count = 0;
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === num){
            if(mid < foundAt) foundAt = mid;
        }
        if(arr[mid] < num){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if(foundAt < Infinity){
        for(let i = foundAt; arr[i] === num; i++){
            count++;
        }
        return count;
    }
    return -1;
}


// findPivot:
//   find index of "pivot" in rotated sorted nums

function findPivot(nums, firstVal, low, high) {
  if (high < low) return 0;   // no pivot

  const mid = Math.floor((low + high) / 2);

  if (nums[mid] < firstVal) {
    // we're at the pivot point *or* it's further left

    if (mid === 0 || nums[mid - 1] > nums[mid]) {
      // found pivot point
      return mid;
    }

    else {
      // recurse & search left of here for pivot
      return findPivot(nums, firstVal, low, mid - 1);
    }
  }

  else {
    // else: recurse & search right of here for pivot
    return findPivot(nums, firstVal, mid + 1, high);
  }
}

// binarySearchRange:
//   return index of sought in nums[low:high] (-1 if not found)

function binarySearchRange(nums, sought, low, high) {

  if (high < low) return -1;

  const mid = Math.floor((low + high) / 2);

  if (nums[mid] === sought) {
    return mid;
  } else if (nums[mid] < sought) {
    return binarySearchRange(nums, sought, mid + 1, high);
  } else {
    return binarySearchRange(nums, sought, low, mid - 1);
  }
}

// findRotatedIndex:
//   find index of sought in rotated list of sorted nums

function findRotatedIndex(nums, sought) {
  const pivot = findPivot(nums, nums[0], 0, nums.length);

  if (pivot === 0) {
    // no pivot: do straightforward bsearch across nums
    return binarySearchRange(nums, sought, 0, nums.length);
  }

  else if (sought < nums[0]) {
    // appears on right-hand of pivot; search there
    return binarySearchRange(nums, sought, pivot, nums.length);
  }

  else {
    // otherwise, search left of pivot
    return binarySearchRange(nums, sought, 0, pivot - 1);
  }
}

function bubbleSort(arr, comparator){
  if(arr.length < 2) return arr;
  if(typeof comparator !== 'function'){
      comparator = (a,b) => a - b;
  }
  let swap = (idx1, idx2) => {
      let temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
  }
  let end = arr.length - 1;
  for(let i = end; i > 0; i--){
      for(let j = 0; j < i; j++){
          if(comparator(arr[j], arr[j + 1]) > 0) swap(j, j + 1);
      }
  }
  return arr;
}

function selectionSort(arr, comparator){
  if(arr.length < 2) return arr;
  if(typeof comparator !== 'function') comparator = (a,b) => a - b;
  let swap = (idx1, idx2) => {
      let temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
  }
  
  let lowIndex;
  for(let i = 0; i < arr.length; i++){
      lowIndex = i;
      for(let j = i; j < arr.length; j++){
          if(comparator(arr[lowIndex], arr[j]) > 0) lowIndex = j;
      }
      if(lowIndex != i) swap(i, lowIndex);
  }
  return arr;
}