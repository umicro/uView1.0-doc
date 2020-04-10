## Divider 分割线

<demo-model url="/pages/componentsC/divider/index"></demo-model>


区隔内容的分割线，一般用于页面底部"没有更多"的提示。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用
文字内容通过`slot`传入

```html
<u-divider>大漠孤烟直</u-divider>
```

### 设置文字颜色
可以通过`color`指定文字的颜色
```html
<u-divider color="#fa3534">长河落日圆</u-divider>
```

### 设置左右边线条宽度和颜色
可以通过`half-width`指定文字某一边的线条宽度(注意这里设置的是一边，而不是文字两边线条的总长度)，`half-width`可以是数值(rpx)或者百分比，
`divider-color`指定线条颜色
```html
<u-divider color="#fa3534" :half-width="200">姑苏城外寒山寺</u-divider>
```

### API

### Props

| 参数          | 说明            | 类型            |        默认值        | 可选值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| half-width | 文字左或右边线条宽度，数值或百分比，数值时单位为rpx  | String \| Number | - | 200 |
| divider-color | 线条颜色 | String  | #dcdfe6 | - |
| color | 文字颜色 | String  | #606266 | - |
| fontSize | 字体大小，单位rpx | String \| Number  | 28 | - |
| bg-color | 整个divider的背景颜色 | String  | #ffffff | - |
| height | 整个divider的高度，单位rpx | string \| Number  | 40 | - |
