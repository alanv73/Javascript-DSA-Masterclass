// function factorial accepts a number and returns the factorial of that number.
// factorial is the product of an integer and all of the integers below it;
// e.g. factorial 4 (4!) is equal to 24 because 4 x 3 x 2 x 1 = 24
// factorial zero (0!) is always 1
//
// factorialate(1); // 1
// factorialate(2); // 2
// factorialate(4); // 24
// factorialate(7); // 5040

function factorialate(num){
    if(num === 0) return 1;
    return num * factorialate(--num);
}

factorialate(5);
