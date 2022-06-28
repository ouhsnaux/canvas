const saveAndRestore = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('save').getContext('2d');
  ctx.save();

  ctx.fillRect(0, 0, 150, 150);

  ctx.fillStyle = '#09F';
  ctx.save();
  ctx.fillRect(15, 15, 120, 120);

  ctx.fillStyle = '#FFF';
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);

  ctx.restore();
  ctx.fillRect(45, 45, 60, 60);

  ctx.restore();
  ctx.fillRect(60, 60, 30, 30);
};

const translate = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('translate').getContext('2d');
  ctx.save();
  for (let i = 0; i < 3; i += 1) {
    ctx.translate(0, i === 0 ? 0 : 50);
    ctx.save();
    for (let j = 0; j < 3; j += 1) {
      ctx.translate(j === 0 ? 0 : 50, 0);
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * j}, 255)`;
      ctx.fillRect(0, 0, 25, 25);
    }
    ctx.restore();
  }
  ctx.restore();
};

const rotateDot = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('rotate-dot').getContext('2d');
  ctx.save();
  ctx.translate(100, 100);
  for (let i = 1; i < 6; i += 1) {
    ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
    const number = i * 6;
    const angle = (Math.PI * 2) / number;
    for (let j = 0; j < number; j += 1) {
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(0, 15 * i, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
};

const rotateRect = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('rotate-rect');

  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext('2d');
  ctx.save();

  ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);
  ctx.fillStyle = '#00AEC7';
  ctx.fillRect(-50, -50, 100, 100);
  ctx.rotate((30 / 180) * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fillRect(-50, -50, 100, 100);

  ctx.restore();
};

const scale = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('scale').getContext('2d');
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  ctx.save();
  ctx.scale(1, -1);
  ctx.font = '48px 楷体';
  ctx.fillText('MDN', 10, -60);
  ctx.restore();
};

const drawStarLine = (ctx, width) => {
  const angle = (Math.PI * 2) / 5;
  const bottom = width / 2 / Math.tan((36 / 180) * Math.PI);
  const top = bottom + width / 2 / Math.tan((18 / 180) * Math.PI);
  ctx.moveTo(-width / 2, -bottom);
  for (let i = 0; i < 5; i += 1) {
    ctx.lineTo(0, -top);
    ctx.lineTo(width / 2, -bottom);
    ctx.rotate(angle);
  }
};

const drawStar = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('star');

  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext('2d');

  ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);
  drawStarLine(ctx, 40);
  ctx.stroke();
};

const skew = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('skew').getContext('2d');
  ctx.save();
  ctx.fillRect(0, 0, 10, 10);
  ctx.restore();

  ctx.transform(1, 0, 3, 1, 0, 0);
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 50, 50);
};

const transformRotate = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('transform-rotate').getContext('2d');
  ctx.fillRect(100, 0, 30, 30);
  const angle = Math.PI / 6;
  ctx.save();
  ctx.rotate(angle);
  ctx.fillRect(100, 0, 30, 30);
  ctx.restore();

  ctx.fillStyle = 'red';
  ctx.transform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
  ctx.fillRect(100, 0, 30, 30);
};

const transformScale = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('transform-scale').getContext('2d');
  ctx.save();
  ctx.scale(0.5, 0.3);
  ctx.fillRect(0, 0, 100, 100);
  ctx.restore();

  ctx.fillStyle = 'red';
  ctx.transform(0.5, 0, 0, 0.3, 0, 0);
  ctx.fillRect(0, 0, 100, 100);
};

window.onload = () => {
  saveAndRestore();
  translate();
  rotateDot();
  rotateRect();
  drawStar();
  scale();
  skew();
  transformRotate();
  transformScale();
};
