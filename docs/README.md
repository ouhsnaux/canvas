# Canvas

通过 `<canvas>` 标签和 `JavaScript` 画图。
可以用来制作动画，游戏，数据可视化，操作图片，视频处理等。

主要用于2D领域

## 使用

### HTML

1. 给 `canvas`元素添加id
2. 最好指定宽和高
3. canvas标签内添加候补内容
4. 必须包含关闭标签 `</canvas>`

### JS 端

1. 通过DOM操作获取canvas元素, `document.getElementById('canvas')`
2. 获取上下文，`canvas.getContext('2d');` 通过该上下文画图

### vscode开启代码提示

在canvas元素前添加 `/** @type {HTMLCanvasElement} */`

在2D上下文前添加 `/** @type {CanvasRenderingContext2D} */`

## TODO

* 游戏
* 火柴人
