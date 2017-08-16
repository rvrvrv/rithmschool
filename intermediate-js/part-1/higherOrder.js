function countdown(seconds) {
  let time = (seconds > 0) ? seconds : 0;
  const timer = setInterval(() => {
    if (time > 0) {
      console.log(time);
      time--;
    } else {
      clearInterval(timer);
      return console.log('DONE!');
    }
  }, 1000);
}

function randomGame() {
  let counter = 0;
  let num = 0;
  const running = setInterval(() => {
    ++counter;
    num = Math.random().toFixed(2);
    console.log(num);
    if (num > 0.75) {
      clearInterval(running);
      return console.log(`It took ${counter} tries.`);
    }
  }, 500);
}

function isEven(a) {
  return a % 2 === 0;
}

function isOdd(a) {
  return a % 2 !== 0;
}

function isPrime(a) {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  return a > 1;
}

function numberFact(num, cb) {
  return cb(num);
}

function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return arr[i];
  }
}

function findIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return i;
  }
}

function specialMultiply(a, b) {
  if (arguments.length === 2) return a * b;
  return (b => a * b);
}
