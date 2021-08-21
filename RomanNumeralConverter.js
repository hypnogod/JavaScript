const numMap = {
 1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M' 
}
/* I = 1 V = 5 X = 10 L = 50 C = 100 D = 500 M = 1000 */
function convertToRoman(num) {
  let result = ''
  Object.keys(numMap).reverse().forEach((key) => {
      while (num >= key){
      result += numMap[key];
      num -= key;
    }
})
  return result;
}

console.log(convertToRoman(9));
