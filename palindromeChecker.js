function palindrome(str) {
  str= str.toLowerCase();
  let newString = str.replace(/[\s-~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '');
  console.log(newString)
  let reverse = newString.split('').reverse().join('');
console.log(reverse)
  return reverse === newString;
}



palindrome("My age is 0, 0 si ega ym.");

/*
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


***palindrome for numbers only (w/o using strings method)***
const isReverse = (num) => {
    let rev = 0;
    while (num && num > 0) {
        rev = (rev * 10) + (num%10)
        num = Math.floor(num/10); 
    }
    return rev;
}
var palindrome = function(x) {
    console.log(isReverse(x))
    return x === isReverse(x);
};


*/
