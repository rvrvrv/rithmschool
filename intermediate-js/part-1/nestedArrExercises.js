/*
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]
*/

function rotate(arr, num) {
  // Determine how many moves to make
  const amount = num % arr.length;
  // Iterate as many times as necessary
  for (let i = 0; i < amount; i++) {
    // Rotate array one value at a time
    arr.unshift(arr.pop());
  }
  return arr;
}

/*
makeXOGrid(1,4) // [["X","O","X","O"]]
makeXOGrid(3,2) // [["X","O"],["X","O"],["X","O"]]
makeXOGrid(3,3) // [["X","O","X"],["O","X","O"],["X","O","X"]]
*/

function makeXOGrid(rows, cols) {
  const arr = [];
  let ltrX = true; // Always begin with X

  // Iterate for as many rows as necessary
  for (let i = 0; i < rows; i++) {
    // Create new row with as many cols as necessary
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      // Push the appropriate letter
      newRow.push(`${ltrX ? 'X' : 'O'}`);
      // Swap letter
      ltrX = !ltrX;
    }
    // Push complete row onto final arr
    arr.push(newRow);
  }
  return arr;
}
