// write a function called power that accepts a base and an exponent.
// It should return the power of the base to the exponent.
// It should mimic the function of Math.pow() - do not worry about negative bases and exponents.
//
// power(2,0); // 1
// power(2,2); // 4
// power(2,4); // 16

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, --exponent);
}

power (2,16);
