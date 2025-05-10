/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(str, pattern) {
  return new RegExp(`^${pattern}$`).test(str);
};

console.log(isMatch('ab', '.*')) // false