// const romans = {
//   V  :           5,
//   I  :           1,
//   X  :           10,
//   L  :           50,
//   C  :           100,
//   D  :           500,
//   M  :           1000
// }

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(roman) {
//     let sumer = 0
//     for (let i = 0; i < roman.length; i++) {
//       const current = romans[roman[i]]
//       const next = romans[roman[i + 1]]
//       sumer = current < next ? sumer - current : sumer + current
//     }
//     return sumer
// };

// console.log(romanToInt('MCMXCIV')) // 1996

function algo(...rest){
  console.log(this, ...rest)
}

algo.call({surname: 'jose'}, 1, 2, 3) // {name: 'jose'} 1 2 3  
algo.apply({name: 'jose'}, [1, 2, 3]) // {name: 'jose'} 1 2 3
algo.bind({name: 'jose'})(1, 2, 3) // {name: 'jose'} 1 2 3