/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const obj = {}
  for (let el of strs) {
      if (!obj[el.slice(0,2)]) {
          obj[el.slice(0,2)] = 1
      } else {
          obj[el.slice(0,2)]++
      }
  }
  let pref = ''
  let count = 0
  let rep = 1
  for (let k in obj) {
      if(obj[k] > count) {
        count = obj[k]
        pref = k
      } else {
        rep++
      }
  }
  return [count, pref, rep]
};

console.log(longestCommonPrefix(["flower","flow","flight", 'redhood'])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]))