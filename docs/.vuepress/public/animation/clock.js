const drawClock = (newCanvas) => {
  /** @type {HTMLCanvasElement} */
  const canvas = newCanvas;

  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext('2d');

  const drawRectAndText = withSave(ctx, (text) => {
    ctx.fillRect(-2, -80, 4, 20);
    ctx.font = '15px serif';
    ctx.textAlign = 'center';
    if (text === 6) {
      ctx.scale(-1, -1);
      ctx.fillText(text, 0, 100);
    } else {
      ctx.fillText(text, 0, -90);
    }
  });

  const drawDot = withSave(ctx, () => {
    ctx.beginPath();
    ctx.arc(0, -75, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  });

  const drawBg = withSave(ctx, () => {
    // 画圆
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 150, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();

    // 12 个黑线和数字
    const angle = Math.PI / 6;
    for (let i = 0; i < 12; i += 1) {
      ctx.rotate(angle);
      if (i % 3 === 2) {
        drawRectAndText(i + 1);
      } else {
        drawDot();
      }
    }
  });
  const drawHour = withSave(ctx, () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const angle = ((hour * 3600 + minute * 60 + second) / 3600 / 12) * Math.PI * 2;
    ctx.rotate(angle);
    ctx.fillRect(-4, -30, 8, 40);
  });
  const drawMinute = withSave(ctx, () => {
    const now = new Date();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const angle = ((minute * 60 + second) / 3600) * Math.PI * 2;
    ctx.rotate(angle);
    ctx.fillRect(-2, -50, 4, 70);
  });
  const drawSecond = withSave(ctx, () => {
    const now = new Date();
    const second = now.getSeconds();
    const angle = (second / 60) * Math.PI * 2;
    ctx.rotate(angle);
    ctx.fillStyle = 'red';
    ctx.fillRect(-1, -60, 2, 90);
  });

  const reDraw = withSave(ctx, () => {
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.clientWidth, canvas.clientHeight);
    drawHour();
    drawMinute();
    drawSecond();

    window.requestAnimationFrame(reDraw);
  });
  ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);
  // drawBg();
  window.requestAnimationFrame(reDraw);
  setInterval(reDraw, 1000);
};
