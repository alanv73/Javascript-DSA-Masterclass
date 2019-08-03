function iterativeFactorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

function recursiveFactorial(num){
    if(num === 2) return 2;
    return num * recursiveFactorial(--num);
}

clear();
iterativeFactorial(5);
recursiveFactorial(5);