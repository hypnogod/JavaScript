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
*/
