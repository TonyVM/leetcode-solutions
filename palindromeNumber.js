function isPalindromee(x) {
    var numstr = x.toString();
    var reversed = numstr.split('').reverse().join('');
    console.log(numstr, reversed);
    return numstr === reversed;
}
;
console.log(isPalindrome(121)); // true
