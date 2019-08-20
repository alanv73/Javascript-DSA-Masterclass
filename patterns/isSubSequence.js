// function takes two strings and checks whether the characters
// in the first string for a sub-sequence of the characters in
// the second string. In other words, the function should check
// whether the characters in the first string appear somewhere
// in the second string *without changing the order*
//
// Time: O(N + M)
// Space: O(1)
//
//isSubSequence('hello', 'hello world'); // true
//isSubSequence('sing', 'sting'); // true
//isSubSequence('abc', 'abracadabra'); // true
//isSubSequence('abc', 'acb'); // false (order matters)

// ***** my solution *****
// function isSubSequence(first, second){
//     let j = 0;

//     for(let i = 0; i < second.length; i++){
//         if(first[j] === second[i]){
//             j++;
//             if(j === first.length){
//                 return true;
//             }
//         }
//     }
    
//     return false;
// }

// ***** colt's solution *****
function isSubSequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

isSubSequence('sing', 'sting');