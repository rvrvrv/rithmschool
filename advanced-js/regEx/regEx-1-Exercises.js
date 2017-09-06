function countNumbers(str) {
  const matches = str.match(/[0-9]/g);
  return matches ? matches.length : 0;
}

countNumbers('321321dsadsa930-29d132b13a'); // 16
countNumbers('This is so wonderful'); // 0
countNumbers('This is so 1234'); // 4


function capitalSentence(str) {
  return str
    .match(/[A-Z]/g)
    .join('');
}

capitalSentence('The Cat In The Hat'); // "TCITH"
capitalSentence('And I Think to Myself What a Wonderful World'); // "AITMWWW"


function isValidPassword(str) {
  return !!(str.match(/(?=.*[!@#$]).{8,}/));
}

isValidPassword('TacoCat'); // false
isValidPassword('foo'); // false
isValidPassword('awesome!'); // true
isValidPassword('win!@'); // false
