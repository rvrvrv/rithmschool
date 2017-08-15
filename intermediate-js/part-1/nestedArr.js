const nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens() {
  nestedArr.forEach((innerArr) => {
    innerArr.forEach((i) => {
      if (i % 2 === 0) console.log(i);
    });
  });
}

function sumTotal() {
  const flattened = nestedArr.reduce((a, b) => a.concat(b), []);
  return flattened.reduce((acc, item) => acc += item, 0);
}

const nameArr = ['Elie', ['Matt', ['Tim']], ['Colt', ['Whisky', ['Janey'], 'Tom']], 'Lorien'];

function flattenArr(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flattenArr(flat) : flat;
}

function countVowels(arr) {
  const vowels = /[aeiou]/gi;
  const joinedNames = flattenArr(arr).join('');
  return joinedNames.match(vowels).length;
}
