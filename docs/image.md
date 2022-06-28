# 图片

## 背景图

createPattern(img, type);

type: repeat, repeat-x, repeat-y, no-repeat

将pattern赋值给fillStyle

## 操作图像

### 操作源

* URL
* HTMLImageElement, Image函数或 `<img>` 元素
* HTMLVideoElement
* HTMLCanvasElement
* ImageBitmap

操作其他域名下的图片需要指定 `crossOrigin` 属性

### 操作时机

* Image函数生成的图片的onload事件回调中
* 通过DOM操作获取的 `<img>` 元素
* 通过DOM操作获取的 `<video>` 元素

### 绘制

* `drawImage(image, x, y);` 在指定位置画图
* `drawImage(image, x, y, width, height)` 在指定位置以指定大小画图
* `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
图片裁切

<iframe width="100%" height="500px" :src="$withBase('/image/index.html')"></iframe>

<<< @/docs/.vuepress/public/image/index.js
