// input: 2 strings
// output: boolean
// Given two strings write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema formed from iceman.

// ***** my solution *****
// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length){
//         return false;
//     }

//     let freqStr1 = {};
//     let freqStr2 = {};

//     for(let i = 0; i < str1.length; i++){
//         freqStr1[str1[i]] = ++freqStr1[str1[i]] || 1;
//         freqStr2[str2[i]] = ++freqStr2[str2[i]] || 1;
//     }

//     for (let key in freqStr1){
//         if(!key in freqStr2){
//             return false;
//         }
//         if(freqStr2[key] !== freqStr1[key]){
//             return false;
//         }
//     }
//     return true;
// }

// ***** colt's solution *****
function validAnagram(first, second) {
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

validAnagram('cinema', 'iceman')
