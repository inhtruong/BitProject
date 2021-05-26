const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy = Math.floor(Math.random() * 4) + 1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.y = -this.dy;
    }
    this.draw();
  }
}

function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  let r = getRandomHex();
  let g = getRandomHex();
  let b = getRandomHex();
  return "rgb(" + r + "," + g + "," + b + ")";
}

const balls = [];
for (let i = 0; i < 20; i++) {
  let color = getRandomColor();
  let radius = Math.floor(Math.random() * 30) + 15;
  let x = Math.random() * (canvas.width - radius * 2) + radius;
  let y = Math.random() * (canvas.height - radius * 2) + radius;
  balls.push(new Circle(x, y, radius, color));
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.animate();
  }

  requestAnimationFrame(update);
}

update();
