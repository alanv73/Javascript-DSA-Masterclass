// inputs: two arrays
// output: boolean
// returns true if every value in first array has its square as 
// corresponding value in second array. Frequncy of values must be the same
//
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//  function same(arr1, arr2){
//      if (arr1.length === arr2.length){
//          var arr1Squared = arr1.map(num => num ** 2).sort();
//          var arr2Sorted = arr2.sort();
//          for (var i = 0; i < arr1Squared.length; i++){
//              if (arr1Squared[i] !== arr2Sorted[i]){
//                  return false
//              }
//          }
//          return true;
//      } else {
//          return false;
//      }
//  }

// ****colt's version****
// function same(arr1, arr2){
//     if (arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }


// **** refactor 1 ****
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false;
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }
    return true;
}

same([1,2,3,2,5], [9,1,4,4,11]) // false
