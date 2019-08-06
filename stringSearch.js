// function accepts two strings. Find the second string in the first string

// function stringSearch(str, pattern){
//     let i = 0, j = 0;
//     let matches = 0;
//     while(i < str.length){
//         while (j < pattern.length){
//             if(str[i] !== pattern[j]){
//                 if(j === 0) i++;
//                 break;
//             }
//             i++;
//             j++;
//         }
//         j = 0;
//         if(str.substring(i - pattern.length, i) === pattern){
//             matches++;
//         }
//     }
//     return matches;
// }

function stringSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}



stringSearch('amanaplanacanalpanama', 'ana');