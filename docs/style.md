# 样式

## 颜色

### 单一颜色

取值与css相同

* fillStyle 填充色
* strokeStyle 线的颜色

### 透明度

除使用颜色中带的透明度，还可以使用 `globalAlpha` 设置全局透明度

### 渐变

* 线性渐变 createLinearGradient(x1, y1, x2, y2)
* 径向渐变 createRadialGradient(x1, y1, r1, x2, y2, r2)
* gradient.addColorStop(position, color) 渐变关键点及颜色，可调用多次

## 线型

* lineWidth 线宽
* lineCap 端点形状
  * butt
  * round
  * square
* lineJoin 连接点形状
  * round 圆形
  * bevel 磨平
  * miter 尖形
* getLineDash()
<!-- segments 为一个数组，参数分别表示线长和间距 -->
* setLineDash(segments)
* lineDashOffset 起始偏移量

## 阴影

* shadowOffsetX
* shadowOffsetY
* shadowBlur
* shadowColor

## 文字样式

* font 同 `css font`，默认 `10px sans-serif`
<!-- 对齐方式相对于基点而言，比如center就是基点位于文字中间 -->
* textAlign: `start, end, left, right, center`
* textBaseline: `top, hanging, middle, alphabetic, ideographic, bottom`
* direction: `ltr, rtl, inherit`
* measureText() 测量文本的样式

<iframe width="100%" height="500px" :src="$withBase('/style/index.html')"></iframe>

<<< @/docs/.vuepress/public/style/index.js
