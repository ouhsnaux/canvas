const drawLine = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('line').getContext('2d');
  const image = new Image();
  image.src = './backdrop.png';
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
  image.src = './rhino.jpg';
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
  image.src = './rhino.jpg';
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

const drawMosaic = () => {
  const width = 200;
  const height = 200;
  const rows = 40;
  const columns = 40;
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('Mosaic').getContext('2d');
  const image = ctx.createImageData(width, height);
  const data = image.data;
  const pxX = width / columns;
  const pxY = height / rows;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      for (let x = row * pxX; x < (row + 1) * pxX; x++) {
        for (let y = column * pxY; y < (column + 1) * pxY; y++) {
          const start = ((x * width) + y) * 4;
          data[start] = r;
          data[start + 1] = g;
          data[start + 2] = b;
          data[start + 3] = 255;
        }
      }
    }
  }
  ctx.putImageData(image, 0, 0);
}
let interval;
let texts = [];
let id = 0;
function* generatorID() {
  while(true) {
    yield id++;
  }
};
const generatorId = (function () {
  const gen = generatorID();
  return function() {
    const item = gen.next();
    return item.value;
  }
}())

const cleanTexts = () => {
  texts = texts.filter((item) => item.x + item.width >= 0);
}

const drawV = (ctx, video) => {
  ctx.drawImage(video, 0, 0, 200, 360);
  ctx.font = '28';
  ctx.fillStyle = 'white';
  texts.forEach((item) => {
    item.x--;
    const { text, x, y } = item;
    ctx.fillText(text, x, y);
  });
  cleanTexts();
}
const drawVideo = () => {
  /** @type {CanvasRenderingContext2D} */
  const ctx = document.getElementById('video-canvas').getContext('2d');
  const video = document.getElementById('video');

  video.addEventListener('pause', () => {
    clearInterval(interval);
  });
  video.addEventListener('play', () => {
    interval = setInterval(() => {
      drawV(ctx, video);
    }, 16);
  });
  video.addEventListener('ended', () => {
    clearInterval(interval);
  })
}
class Text {
  constructor(text) {
    const id = generatorId();
    this.id = id;
    this.text = text;
    this.x = 200;
    this.y = 18 + 36 * Math.floor(Math.random() * 10);
    /** @type {CanvasRenderingContext2D} */
    const ctx = document.getElementById('video-canvas').getContext('2d');
    this.width = ctx.measureText(text).width;
  }
}
const addText = () => {
  const ele = document.getElementById('text');
  texts.push(new Text(ele.value));
}
window.onload = () => {
  drawLine();
  drawRepeatImage();
  drawPattern();
  drawImageSlice();
  drawMosaic();
  drawVideo();
};
