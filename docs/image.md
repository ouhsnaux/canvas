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
* `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)` 图片裁切
* ctx.imageSmoothingEnabled 开启反锯齿

## 修改像素

## ImageData 属性

* width
* height
* data 数组，`长度为 width * height * 4`，每4个元素表示 R/G/B/A，每个元素取值都是0~255

```js
// 获取第row行，第column列像素的代码的Blue部分
imageData.data[((row * imageData.width) + column) * 4 + 2]
```

### 操作

* `ctx.createImageData(width, height)` 生成指定尺寸的全黑数据
<!-- TODO 不理解 -->
* `ctx.createImageData(anotherImageData)`  你也可以创建一个被 anotherImageData对象指定的相同像素的 ImageData对象。这个新的对象像素全部被预设为透明黑。这个并非复制了图片数据。
* `ctx.getImageData(left, top, width, height)` 获取指定位置尺寸的数据
* `ctx.putImageData(imageData, width, height)` 在指定位置写入图形

```js
// 获取图像某点的颜色
const [red, green, blue, alpha] = ctx.getImageData(x, y, 1, 1);
const color = `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`
```

## 保存图片

* canvas.toDataURL('image/png');
* canvas.toDataURL('image/jpeg', quality);
* canvas.toBlob(callback, type, encoderOptions)

<iframe width="100%" height="500px" :src="$withBase('/image/index.html')"></iframe>

<<< @/docs/.vuepress/public/image/index.js
