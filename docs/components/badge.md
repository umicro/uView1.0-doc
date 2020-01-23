## Badge 徽标数
该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`count`参数定义徽标内容
- 通过`type`设置主题。重申一次，uView中，所有组件的`type`参数都只有5个固定的可选值，分别是`primary`(蓝色-主色)，`warning`(黄色-警告)，
`error`(红色-错误)，`success`(绿色-成功)，`info`(灰色-信息)

```html
<u-badge type="error" count="7"></u-badge>
```

### 设置徽标的尺寸

参数是`size`，如果设置为`small`，将会得到一个小尺寸的徽标。组件内部是通过css的`scale`属性值进行缩放

```html
<u-badge size="small" type="green"></u-badge>
```

### 设置徽标的类型为一个圆点

通过`dot`参数设置，该形式组件没有内容，只显示一个圆点

```html
<u-badge :dot="true" type="green"></u-badge>
```

### 自定义徽标样式

该组件内部通过一个`view`元素实现，是一个根元素，依据`vue-cli`的`vue-loader`特性，在引用的组件上直接写类名或者内联样式，可以作用于组件内部的
根元素上，所以用户可以在组件引用时自定义修改样式 

```html
<u-badge type="green" class="badge"></u-badge>

<style scoped>
	.badge {
		background-color: blue;
		color: white;
	}
</style>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| count | 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 0 时隐藏  | String \| Number | - | - |
| dot | 不展示数字，只有一个小点 | Boolean  | false | true |
| overflow-count | 展示封顶的数字值 | String \| Number  | 99 | - |
| type | 使用预设的颜色 | String  | error | success / primary / warning / info |
| show-zero | 当数值为 0 时，是否展示 Badge | Boolean  | false | true |
| size | Badge的尺寸，设为`small`会得到小一号的Badge | String  | normal | small |
| offset | 设置badge的位置偏移，格式为 [x, y]，也即设置的为`top`和`right`的值，单位upx | Array | - | - |


