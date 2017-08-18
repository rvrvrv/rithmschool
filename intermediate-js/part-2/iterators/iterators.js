// Array.forEach

function double(arr) {
  const newArr = [];
  arr.forEach(val => newArr.push(val * 2));
  return newArr;
}

function printFirstAndLast(arr) {
  arr.forEach(str => console.log(str[0], str[str.length - 1]));
}

function addKeyAndValue(arr, key, val) {
  arr.forEach(obj => obj[key] = val);
  return arr;
}

// Array.map

function valTimesIndex(arr) {
  return arr.map((val, index) => val * index);
}

function extractKey(arr, key) {
  return arr.map(val => val[key]);
}

// Array.filter

function filterLetters(arr, val) {
  return arr.filter(letter => letter.toLowerCase() === val.toLowerCase()).length;
}

function filterKey(arr, key) {
  return arr.filter(obj => obj[key]);
}


// Array.reduce

// Sum of array
const arr = [2, 4, 6, 8];
arr.reduce((acc, next) => acc + next);

// Assign corresponding object keys to values >= 2
const arr2 = [1, 5, 9, 63];
const reduced = arr2.reduce((acc, next, index) => {
  if (next >= 2) acc[`key${index}`] = next;
  return acc;
}, {});

// Exercises

function extractKey(arr, key) {
  return arr.reduce((acc, next) => {
    acc.push(next[key]);
    return acc;
  }, []);
}

function filterLetters(arr, letter) {
  return arr.reduce((acc, next) => {
    if (letter.toLowerCase() === next.toLowerCase()) acc++;
    return acc;
  }, 0);
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce((acc, next) => {
    next[key] = value;
    return acc;
  }, arr);
}
