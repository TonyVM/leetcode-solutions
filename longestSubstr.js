/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {  //O(n^3)
  let longest = ''
  // let miSet = new Set()
  // miSet.add(s)
  for (let i = 0; i < s.length; i++) {  //pwwkew
    let temp = s[i]
    // console.log('======= i: ', i, 'temp: ', temp, 'longest: ', longest, '==========')
    for (let j = i + 1; j < s.length; j++) {
      if (temp.indexOf(s[j]) === -1) {
        temp += s[j]
      } else {
        longest = temp.length > longest.length ? temp : longest
        break
      }
      // console.log('j: ', j, 'temp: ', temp)
    }
    longest = temp.length > longest.length ? temp : longest
  }
  return longest.length
};

// console.log(lengthOfLongestSubstring('abcabcdbb'))
// console.log(lengthOfLongestSubstring('bbbbbbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))


// function lengthOfLongestSubstring(s) {// O(n)
//   let maxLength = 0;
//   let left = 0
//   const charSet = new Set();
//   for (let right = 0; right < s.length; right++) { //{p,w,} s[right] = w
//     while (charSet.has(s[right])){
//       charSet.delete(s[left]) //{w}
//       left++
//     }
//     charSet.add(s[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }