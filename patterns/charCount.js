// function charCount(str){
//     var strLower = str.toLowerCase();
//     var result = {};

//     for (var i = 0; i < str.length; i++){
//         char = strLower[i];
//         if (/^[a-z]/.test(char)){
//             if (result[char]){
//                 result[char]++;
//             } else {
//                 result[char] = 1;
//             }
//         }
//     }
//     return result;
// }


// *********refactor 1*********
// function charCount(str){
//     var result = {};

//     for (var char of str){
//         char = char.toLowerCase();
//         if (/[a-z]/.test(char)){
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return result;
// }


// *********refactor 2**********
// function charCount(str){
//     var result = {};

//     for (var char of str){
//         char = char.toLowerCase();
//         var code = char.charCodeAt(0);
//         if (code > 96 && code < 123){
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return result;
// }



// *********refactor 3**********
function charCount(str){
    var result = {};

    for (var char of str){
        if (isAlpha(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

function isAlpha(char){
    var code = char.charCodeAt(0);
    if ((code > 64 && code < 91 ) || // A - Z
        (code > 96 && code < 123)) { // a-z
      return true;
    }
    return false;
}