/**
 * @param {number} x
 * @return {number}
 */
const LIMIT = {
    MAX: Math.pow(2, 31) - 1,
    MIN: Math.pow(-2, 31)
}
const reverse = function(x) {
  let flag = x < 0 ? -1 : 1;
  console.log('Numero original: ', x)
  let res = parseInt(x.toString().split('').filter(el => el !== '-').reverse().join(''))
  console.log('Numero invertido: ',
    res
  )
  return res < LIMIT.MIN || res > LIMIT.MAX ? 0 : res * flag;
};


console.log(reverse(-123))
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(9646324351))
console.log(Math.pow(2,31), Math.pow(2, 31) - 1, 9646324351);
console.log((Math.pow(2,31) - 1) > 9646324351);
console.log(9646324351 > (2**31) - 1)