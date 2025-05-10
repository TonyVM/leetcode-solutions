// const majority = nums => { 
//   const obj = {};
//   let major = 0;
//   let majorEl = 0
//   for (let n of nums) {
//     if (!obj[n]) {
//       obj[n] = 1
//     } else {
//       obj[n]++
//     }
//   }
//   for (let k in obj) {
//     [major, majorEl] = obj[k] > major ? [obj[k], parseInt(k)] : [major, majorEl]
//   }
//   return [obj, major, majorEl]
// }

// console.log(majority([3, 2, 3]) )// 3
const majority = (nums) => {
  const ocurrencesArr = nums.reduce((acc, num) => {
    acc[num] = acc[num] + 1 || 1
    return acc
  }
  , [])
  console.log(ocurrencesArr)
  ocurrencesArr.forEach(el => console.log(ocurrencesArr.indexOf(el)))
}
majority([3, 3, 4, 2, 3, 3, 3, 2, 4, 3]) // 3