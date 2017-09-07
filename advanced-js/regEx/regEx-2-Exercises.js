// Remove all special characters
function nothingSpecial(str) {
  return typeof str !== 'string' ? 'Not a string!' : str.replace(/([^\w\s]|_)/g, '');
}


// Count the number of sentences
function sentenceCount(string) {
  const matches = string.match(/[.?!]/g);
  return matches ? matches.length : 0;
}


// Debug time validation
function validDateTime(code) {
  const regEx = /^(\d{2}-\d{2}-\d{4}) \d{2}:\d{2}/; // Valid: 14-10-2016 01:12
  return regEx.test(code);
}


// Authenticate a list of usernames
function authList(arr) {
  const regEx = /^(?=.*\d)(?=.*[a-z])[a-z\d]{6,10}$/; // Valid: lowercase letters & num
  return arr.every(username => regEx.test(username));
}


// Remove all exclamation marks from ends of words
function removeExclamation(s) {
  return s.replace(/\b!+/g, '');
}


// Validate Mexican capital phone number

/* Valid:
(56) 84 65 52
(56) 84 6552
(56) 846552
(56)846552
56 84 65 52
56 84 6552
56 846552
56846552
55 95 64 85
55 95 6485
55 956485
55956485
*/
function isValidMXPhoneNumber(str) {
  const regEx = /^(\(5(5|6)\)|5(5|6))(\s?\d\d){3}$/;
  return regEx.test(str);
}


// Validate IPv4 address
function isValidIPv4(str) {
  const regEx = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;
  return regEx.test(str);
}
