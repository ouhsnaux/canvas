const drawRectWithColor = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('rect-colorful');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
};

const drawColorfulBorderedCircle = () => {
  const canvas = document.getElementById('circle-border-colorful');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
};

const drawAlpha = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('alpha').getContext('2d');
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);

  ctx.fillStyle = '#FFF';
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < 7; i += 1) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 * (i + 1), 0, Math.PI * 2);
    ctx.fill();
  }
};

const drawRectDash = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('rect-dash').getContext('2d');
  ctx.setLineDash([50, 5]);
  ctx.strokeRect(10, 10, 100, 100);
};

const drawLinearGradient = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('linear-gradient').getContext('2d');

  // fill gradient
  const linearGradFill = ctx.createLinearGradient(0, 0, 0, 150);
  linearGradFill.addColorStop(0, '#00ABEB');
  linearGradFill.addColorStop(0.5, '#fff');
  linearGradFill.addColorStop(0.5, '#26C000');
  linearGradFill.addColorStop(1, '#fff');

  // stroke gradient
  const linearGradStroke = ctx.createLinearGradient(0, 50, 0, 95);
  linearGradStroke.addColorStop(0.5, '#000');
  linearGradStroke.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = linearGradFill;
  ctx.strokeStyle = linearGradStroke;
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
};

const drawRadialGradient = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('radial-gradient').getContext('2d');

  const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, '#A7D30C');
  radGrad.addColorStop(0.9, '#019F62');
  radGrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

  const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, '#FF5F98');
  radGrad2.addColorStop(0.75, '#FF0188');
  radGrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

  const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, '#00C9FF');
  radGrad3.addColorStop(0.8, '#00B5E2');
  radGrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

  const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, '#F4F201');
  radGrad4.addColorStop(0.8, '#E4C700');
  radGrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

  ctx.fillStyle = radGrad4;
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = radGrad3;
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = radGrad2;
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 200, 200);
};

window.onload = () => {
  drawRectWithColor();
  drawColorfulBorderedCircle();
  drawAlpha();
  drawRectDash();
  drawLinearGradient();
  drawRadialGradient();
};
