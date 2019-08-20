// recursive solution not performant
// complexity: O(2^n) (exponential)

// function fib(n){
//     if(n < 3) return 1;
//     return fib(n-1) + fib(n-2);
// }


// memoization (top-down)
// complexity: O(n)
// function fib(n, memo=[]){
//     if(memo[n] !== undefined) return memo[n];
//     if(n < 3) return 1;
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }

// tabulation - (bottom-up)
// complexity: O(n) but uses fewer iterations (doesn't run out of stack space as quickly)
function fib(n){
    if(n < 3) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
