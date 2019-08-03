// function takes an object which may contain nested objects
// return the sum of all even numbers within the object
//
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj){
    let sum = 0;
    function sumEven(obj){
        Object.keys(obj).forEach(function(key) {
            if(typeof obj[key] === 'object' && obj[key] !== null){
                sumEven(obj[key]);  
            } else {
                if(obj[key] % 2 === 0) sum += obj[key];
            }
        });
    };
    sumEven(obj);
    return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10