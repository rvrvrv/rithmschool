// ES5
var person = {
  fullName: "Harry Potter",
  sayHi: function() {
    setTimeout(function() {
      console.log("Your name is " + this.fullName)
    }.bind(this), 1000)
  }
};

// ES2015
const person2 = {
  fullName: 'Harry Potter',
  sayHi() {
    setTimeout(() => console.log(`Your name is ${this.fullName}`));
  },
};


// -----

// ES5
var name = "Josie";
console.log("When " + name + " comes home, so good.");

// ES2015
let name2 = 'Jose';
console.log(`When ${name2} comes home, so good.`);


// -----

// ES5
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

// ES2015
const DO_NOT_CHANGE2 = 42;


// -----

// ES5
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015
let arr2 = [1, 2];
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];


// -----

// ES5
function double(theArr) {
  return theArr.map(function(val) {
    return val * 2
  });
}

// ES2015
function double2(theArr) {
  return theArr.map(val => val * 2);
}


// -----

// ES5
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
var a = obj.numbers.a;
var b = obj.numbers.b;

// ES2015
const obj2 = {
  numbers: {
    y: 1,
    z: 2
  }
};
let {
  y,
  z
} = obj2.numbers;


// -----

// ES5
function add(c, d) {
  if (c === 0) c = 0;
  else {
    c = c || 10;
  }
  if (d === 0) d = 0;
  else {
    d = d || 10;
  }
  return c + d;
}

// ES2015
function add2(c = 10, d = 10) {
  return c + d;
}
