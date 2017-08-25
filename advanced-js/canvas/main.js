const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

// Square in top-left corner
const [upperLeftX, upperLeftY] = [0, 0];
const [width, height] = [50, 50];
ctx.fillStyle = '#abc';
ctx.fillRect(upperLeftX, upperLeftY, width, height);

// Triangle in bottom-left corner
ctx.fillStyle = '#aef';
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(100, 350);
ctx.lineTo(0, 300);
ctx.fill();
ctx.closePath();

// Text on canvas
ctx.font = '32px Tahoma';
ctx.textAlign = 'center';
ctx.fillStyle = '#60a';
ctx.fillText('Hello', canvas.width / 2, 50);
ctx.fillText('World', canvas.width / 2, 80);

// Clear the canvas
// ctx.clearRect(0,0,canvas.width, canvas.height), 5000);

// Create a square as an object
const square = {
  corner: [0, 0],
  width: 50,
  height: 50,
  color: '#fdd',
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
  },
};

// Draw function to move square diagonally down and to the right
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  square.corner[0] += 2;
  square.corner[1] += 2;
  square.draw();
}

// 50ms = 20 draws per second, i.e. 20fps
setTimeout(() => setInterval(draw, 50), 3000);
