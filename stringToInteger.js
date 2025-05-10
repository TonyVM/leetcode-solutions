/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const pattern = /^\s*[-+]?\d+(?=-|\D|$)/;
  const res = s.match(pattern);
  if (res) {
    if (parseInt(res[0]) >= Math.pow(2, 31)) return (Math.pow(2, 31) - 1);
    else if (parseInt(res[0]) < Math.pow(-2, 31)) return Math.pow(-2, 31);
    else return parseInt(res[0]);
  } else {
    return 0;
  }
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("-42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("129cd09"));
console.log(myAtoi("+129cd09"));
console.log(myAtoi("2147483648"));
console.log(Math.pow(2, 31));