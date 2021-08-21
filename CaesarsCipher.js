function rot13(str) {
  let res = '';
  let reg = /[A-Z]/
  str.toUpperCase().split('').forEach((i) => {
    if (reg.test(i)) {
      let a = i.charCodeAt(0);
      res += String.fromCharCode((a < 78 ? a + 13 : a - 13));
    } else { res += i }
  })
  return res;
}

rot13("SERR PBQR PNZC!!");

/* 
const test = {
    encrypted: "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM",
    normal: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

function rot13(str) {
  let decoded = '';
  let initReg = new RegExp(/[a-z]/, 'i');
  for (let i = 0; i < str.length; i++){
    if (initReg.test(str[i])) {
      let index = test.encrypted.indexOf(str[i]);
      decoded += test.normal[index];
    } else {
      decoded += str[i]
    }
  }
  console.log(decoded)
  return decoded;
}

rot13("SERR PBQR PNZC");
*/
