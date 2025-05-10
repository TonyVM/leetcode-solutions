longestValidSubstring
const forbiden = ["aaa","cb"]
const word = 'cbaaaabc'

const max = (w, f) => {
  let n = word.length
  let left = n - 1, right = left
  let maxLen = 0
  let invalid = new Set(forbidden)
  while(left >= -1) {
    for(let i = left; i< Math.min(right, left + 9); i++) {
      let substr = word.slice(left, i+1)
      if(invalid.has(substr)) {
        right = i -1
        break
      }
    }
    maxLen = Math.max(maxLen, right - left -- + 1)
  }
  return maxLen
}

console.log(max(word, forbiden))