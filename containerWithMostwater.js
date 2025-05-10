/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {      // [1, 2, 1]
  let left = 0, right = height.length - 1;
  let maxA = 0

  while (left < right) {
    let w = Math.min(height[left], height[right]) * (right - left)
    maxA = Math.max(w, maxA)

    if ( height[left] < height[right]) {
      left++
    } else { right-- }
  }
  return maxA

};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,8,6,2,5,4,8])); // 40
console.log(maxArea([1,1]));//1
console.log(maxArea([1, 2, 1])); //2
console.log(maxArea([1, 2, 4,3])); //2
console.log(maxArea([2,7,8,3,7,6]))