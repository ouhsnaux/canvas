const drawRect = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('rect');
  const ctx = canvas.getContext('2d');

  // rect
  // 实心方形
  ctx.fillRect(25, 25, 100, 100);
  // 内部清空出一个方形
  ctx.clearRect(45, 45, 60, 60);
  // 画一个空心方形
  ctx.strokeRect(50, 50, 50, 50);
};

const drawPath = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('line');
  const ctx = canvas.getContext('2d');

  // fill
  ctx.beginPath();
  ctx.moveTo(25, 50);
  ctx.lineTo(50, 75);
  ctx.lineTo(50, 25);
  ctx.fill();

  // stroke
  ctx.beginPath();
  ctx.moveTo(125, 50);
  ctx.lineTo(150, 75);
  ctx.lineTo(150, 25);
  ctx.lineTo(125, 50);
  ctx.stroke();
};

const drawSmileFace = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('smile');
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 100, 75, 0, 2 * Math.PI, false);

  ctx.moveTo(85, 75);
  ctx.arc(75, 75, 10, 0, 2 * Math.PI, false);

  ctx.moveTo(135, 75);
  ctx.arc(125, 75, 10, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(100, 100, 50, Math.PI / 6, (Math.PI / 6) * 5, false);
  ctx.stroke();
};

const drawText = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('text').getContext('2d');
  ctx.font = '48px 楷体';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Hello world', 200, 100);
};

const drawStarLine = (ctx, width) => {
  const angle = (Math.PI * 2) / 5;
  const bottom = width / 2 / Math.tan((36 / 180) * Math.PI);
  const top = bottom + width / 2 / Math.tan((18 / 180) * Math.PI);
  ctx.beginPath();
  ctx.moveTo(-width / 2, -bottom);
  for (let i = 0; i < 5; i += 1) {
    ctx.lineTo(0, -top);
    ctx.lineTo(width / 2, -bottom);
    ctx.rotate(angle);
  }
  ctx.closePath();
};

const clip = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('clip').getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2);
  ctx.clip();

  const linearGradient = ctx.createLinearGradient(0, -75, 0, 75);
  linearGradient.addColorStop(0, '#232256');
  linearGradient.addColorStop(1, '#143778');
  ctx.fillStyle = linearGradient;
  ctx.fillRect(-75, -75, 150, 150);

  for (let i = 0; i < 50; i += 1) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(-75 + Math.floor(Math.random() * 150), -75 + Math.floor(Math.random() * 150));
    ctx.rotate(Math.PI * 2 * Math.random());
    drawStarLine(ctx, Math.random() * 5);
    ctx.fill();
    // ctx.font = '10px';
    // ctx.fillStyle = 'red';
    // ctx.fillText(i, 0, 0);
    ctx.restore();
  }
};

window.onload = () => {
  drawRect();
  drawPath();
  drawSmileFace();
  drawText();
  clip();
};
