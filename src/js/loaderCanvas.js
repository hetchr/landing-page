export function canvasDraw() {
  const canvas = document.getElementById("loader_canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = getWidth();
  canvas.height = getHeight();
  createGradient(ctx);
  drawStar(ctx);
}

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 1000, 1100, 0);
  gradient.addColorStop(0, "#FFFFFF");
  gradient.addColorStop(1, "#FFFFFF");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, getWidth(), getHeight());
}

function drawStar(ctx) {
  ctx.fillStyle = "white";
  for (let i = 0; i < 1000; i++) {
    const x = Math.floor(Math.random() * (getWidth() - 1 + 1)) + 1;
    const y = Math.floor(Math.random() * (getHeight() - 1 + 1)) + 1;
    ctx.fillRect(x, y, 1, 1);
  }
}
