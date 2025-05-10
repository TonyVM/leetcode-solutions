/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) { //O(n^2)
//   const resArr = []
// for (let i = 0; i < nums.length; i++) {
//   const prod = nums.reduce((acc, el, index) => {
//     if (index !== i) {
//       acc *= el
//     }
//     return acc
//   }, 1)
//   resArr.push(prod === 0 ? 0 : prod)
// }
// return resArr
// };

var productExceptSelf = function(nums) { //O(n)
  const n = nums.length;
  const result = new Array(n).fill(1);
  console.log(result)
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    console.log(prefix, result)

    result[i] = prefix;
    prefix *= nums[i];

    console.log(prefix, result)
    console.log('=============')
  }
  console.log('*****************************')
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log(suffix, result)

      result[i] *= suffix;
      suffix *= nums[i];

      console.log(suffix, result)
    console.log('=============')
  }

  return result;
};


console.log(productExceptSelf([1,2,3,4])) // [24, 12, 8, 6]
