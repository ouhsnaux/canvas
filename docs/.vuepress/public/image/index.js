const drawLine = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('line').getContext('2d');
  const image = new Image();
  image.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
};

const drawRepeatImage = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('image-repeat').getContext('2d');
  const image = new Image();
  image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  image.width = '50px';
  image.height = '38px';
  image.onload = () => {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        ctx.drawImage(image, j * 50, i * 38, 50, 38);
      }
    }
  };
};

const drawPattern = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('image-pattern').getContext('2d');
  const image = new Image();
  image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  image.onload = () => {
    const pattern = ctx.createPattern(image, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 200, 200);
  };
};

const drawImageSlice = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('slice').getContext('2d');
  ctx.drawImage(document.getElementById('frame'), 0, 0);
  ctx.drawImage(document.getElementById('source'), 53, 71, 10, 10, 21, 20, 87, 104);
};

window.onload = () => {
  drawLine();
  drawRepeatImage();
  drawPattern();
  drawImageSlice();
};
