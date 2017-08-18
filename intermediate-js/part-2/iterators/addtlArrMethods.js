const arr = [1, 2, 3, 4];
const arr2 = [-3, 1, 8, 5];
const arr3 = [1, 2, 3, 4, 5];

// Array.some

const anyGreaterThanTwo = arr.some(val => val > 2);
const anyStrings = arr.some(val => typeof val === 'string');

anyGreaterThanTwo(); // true
anyStrings(); // false

// Array.every

const allGreaterThanTwo = arr.every(val => val > 2);
const allNumbers = arr.every(val => typeof val === 'number');

allGreaterThanTwo(); // false
allNumbers(); // true

// Array.find

const firstValGreaterThanTwo = arr2.find(val => val > 2);
const firstIdxOfElGreaterThanTwo = arr2.findIndex(val => val > 2);

firstValGreaterThanTwo(); // 8
firstIdxOfElGreaterThanTwo(); // 2

// Combining iterators

arr3.filter(val => val % 2 !== 0) // Get odd numbers
  .map(val => val * 2) // Double them
  .reduce((acc, next) => acc + next); // Calculate sum
