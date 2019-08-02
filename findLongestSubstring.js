// given a string, return the length of the longest
// substring with all distinct characters
//
// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6
//
// Time: O(N)

// ***** my solution *****
// function findLongestSubstring(str){
//     let letters = {};
//     let start = 0;
//     let end = 0;
//     let maxLen = 0;
//     while(end < str.length){
//         if(letters[str[end]] > 0){
//             letters[str[start]] = --letters[str[start]];
//             start++;
//         } else {
//             letters[str[end]] = ++letters[str[end]] || 1;
//             end++;
//         }
//         let len = end - start;
//         if (len > maxLen) maxLen = len;
//     }
//     return maxLen;
// }

// ***** colt's solution *****
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log(str.substring(start,i + 1), start, i, longest);
  }
  return longest;
}


// findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6