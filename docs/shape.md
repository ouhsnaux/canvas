# 图形

## 长方形

* `fillRect(x, y, width, height)` 方形盒
* `strokeRect(x, y, width, height)` 方形框
* `clearRect(x, y, width, height)` 清空方形区域

## 线

### 通用

* beginPath() 开始画线
* closePath() 停止画线
* moveTo(x, y) 移动到某个点，作为起点
* stroke() 显示已画的线
* fill() 连接起点与终点，填充当前已画的线围成的封闭区域
  * nonzero 默认值，多个图形并集
  * evenodd 多个图形交集
* clip() 裁切，不会画新内容，但是后续作图只有裁切区域内的才显示

**注意：及时使用 `closePath` 和 `moveTo`，否则会出现意料之外的线**

### 线形

* lineTo(x, y) 直线
<!-- counterclockwise 是否逆时针 -->
* arc(x, y, radius, startAngle, endAngle, counterclockwise) 弧线1
* arcTo(x1, y1, x2, y2, radius) 弧线2
* rect(x, y, width, height) 方形线
  <!-- TODO 贝塞尔曲线 -->

### Path2D

canvas提供了类Path2D，使用此语法创建图形，然后再调用`ctx.fill` 或 `ctx.stroke`。
避免了画多个不相干图形，尤其是封装画图方法时的问题。

## 文字

* fillText(text, x, y [, maxWidth])
* strokeText(text, x, y [, maxWidth])

<iframe width="100%" height="500px" :src="$withBase('/shape/index.html')"></iframe>

<<< @/docs/.vuepress/public/shape/index.js
