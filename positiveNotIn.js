// nums = [3,4,-1,1]
// nums = [0,1,2,3]
nums = [1,3,7,8,9,11,12]
const positivoOut = (nums) => {
  nums = nums.filter(num => num >= 0).sort((a, b) => a - b)
  let missing = 0
  const mSet = new Set(nums)
  let i = 1
  while (mSet.has(i)) {
    i++
  }
  return i
}
console.log(positivoOut(nums))