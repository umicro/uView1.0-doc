## Subsection 分段器

该分段器一般用于用户从几个选项中选择某一个的场景

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`list`数组参数传递分段的选项
- 通过`current`指定初始化时激活的选项

```html
<template>
	<u-subsection :list="list" :current="1"></u-subsection>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '待发货'
					}, 
					{
						name: '待付款'
					}, 
					{
						name: '待评价'
					}
				],
				current: 1
			}
		}
	}
</script>
```

### 模式选择

通过`mode`设置分段器的模式
- 值为`button`时为按钮类型
- 值为`text`时为下划线类型，此时表现形式类似uView的`tabs`组件，但是也有区别：`tabs`组件更强大，灵活，适用于一些复杂的场景。此组件适用于一些简单的场景

```html
<u-subsection :list="list" :current="1"></u-subsection>
```

### 是否开启动画效果

`animation`(默认为`true`)设置为`true`的话，分段器的两种模式滑块移动时都会有动画效果

```html
<u-subsection :animation="true"></u-subsection>
```

### 主题选择

可以通过`type`参数配置主题，该值默认为`warning`，如果不需要自带主题，可以将`type`设置为`none`，同时配置`active-color`参数和`un-active-color`
参数。    
注意：`mode`为`button`时，`un-active-color`参数无效

```html
<u-search :show-action="true" actiona-text="搜索" :animation="true"></u-search>
```

### 设置滑块长度

只有`mode`为`text`时，可以设置底部的滑块长度，单位rpx

```html
<u-search :bar-width="50"></u-search>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 选项的数组，形式见上方"基本使用" | Array | - | - |
| current | 初始化时默认选中的选项索引值  | String \| Number | 0 | - |
| type | 主题颜色，如果想自定义主题，请设置为`none`，见上方说明 | String | warning | error / success / info / primary |
| active-color | 激活时的颜色，见上方说明 | String | #ff9900 | - |
| un-active-color | 未激活时的颜色，见上方说明 | String | #303133 | true |
| mode | 模式选择，，见上方说明 | String | button | text |
| font-size | 字体大小，单位rpx | String \| Number | 28 | - |
| animation | 是否开启动画效果，见上方说明 | Boolean | true | false |
| barWidth | `mode`为`text`时，底部滑块的长度，单位rpx | String \| Number | 40 | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 分段器选项发生改变时触发 | index：选项的index索引值，从0开始 | - |
