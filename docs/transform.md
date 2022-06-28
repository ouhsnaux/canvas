# 变形

## 状态操作

### 操作

* save 保存画布的所有状态
* restore 恢复上次保存的状态

注意保存的是属性状态，比如颜色，阴影等，而不是当前画的图形

### 状态

* 变形，比如移动，旋转和缩放等
* 样式属性
  * 颜色：strokeStyle, fillStyle, globalAlpha
  * 线形：lineWidth, lineCap, lineJoin, miterLimit
  * 阴影：shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor
  * 字体：font, textAlign, textBaseline, direction
* 裁切路径

## 转换

转换前最好先保存状态，转换后恢复状态。避免影响后续作图。

* translate(x, y) 修改原点位置
* rotate(angle) 绕原点旋转
* scale(x, y) 参数可以为负数
* transform(a, b, c, d, e, f), x' = ax + cy + e; y' = bx + dy + f;
* setTransform(a, b, c, d, e, f) 重置为单位矩阵，然后以相同的参数调用transform
* resetTransform() 重置，相当于setTransform(1, 0, 0, 1, 0, 0);

通过 transform 实现其它变换，相对于单位矩阵来说

* translate 通过设置transform的 e 和 f 实现
* scale 通过设置a 和 d实现
* rotate 通过设置a, b, c, d, 其中 `a=cos(θ), c=-sin(θ), b=sin(θ), d=cos(θ)`

<!-- TODO 推导发现 b和c反了，实践证明b和c没反，绕晕了 -->
```
设点 A(x, y) 与x轴的夹角为 α，OA长度为 r，顺时针旋转 θ 后得到点 A' (x1, y1)
则 A' 与x轴的夹角为 α - θ
x = r * cos(α) ①
y = r * sin(α) ②
x1 = r * cos(α - θ) ③
y1 = r * sin(α - θ) ④
展开③ ④得到
x1 = r * (cos(α) * cos(θ) + sin(α) * sin(θ)) = x * cos(θ) + y * sin(θ)
y1 = r * (sin(α) * cos(θ) - cos(α) * sin(θ)) = y * cos(θ) - x * sin(θ)
```

## 组合

globalCompositeOperation，设置新内容与老图形的组合方式

<iframe width="100%" height="700px" :src="$withBase('/transform/index.html')"></iframe>

<<< @/docs/.vuepress/public/transform/index.js
