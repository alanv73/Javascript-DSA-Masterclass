// function accepts a number and returns the nth number in the fibonacci sequence.
// fibonacci sequence of whole numbers is 1,1,2,3,5,8... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.
//
// fib(4); // 3
// fib(10); // 55
// fib(28); // 317811
// fib(35); // 9227465

function fib(num){
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

fib(0);