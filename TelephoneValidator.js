function telephoneCheck(str) {
  let regEx = new RegExp(/^1?\s?(\d{3}|\(\d{3}\))[-. ]?(\d{3}|\(\d{3}\))[-.\s]?\d{4}$/, 'gi')
  return regEx.test(str);
}
telephoneCheck("1 555-555-5555");
