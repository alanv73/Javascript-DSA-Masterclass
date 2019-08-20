// Given two psitive integers find out if the two numbers have
// the same frequency of digits.

function sameFrequency(num1, num2){
    let first = num1.toString();
    let second = num2.toString();

    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then not anagram
        if (!lookup[letter]){
            return false
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

sameFrequency(3589578,5879385);