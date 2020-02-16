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
- 值为`tabs`时为下划线类型，此时表现形式类似uView的`tabs`组件，但是也有区别：`tabs`组件更强大，灵活，适用于一些复杂的场景。此组件适用于一些简单的场景
- 值为`subsection`时为分段器形式

```html
<u-subsection :list="list" :current="1"></u-subsection>
```

### 是否开启动画效果

`animation`(默认为`true`)设置为`true`的话，分段器的两种模式滑块移动时都会有动画效果

```html
<u-subsection :animation="true"></u-subsection>
```

### 颜色配置

通过`active-color`配置激活选项的文字颜色，`mode`为`subsection`时无效，此时默认为白色  
`mode`为`button`时  
- 通过`bgColor`配置背景颜色
- 通过`buttonColor`配置按钮颜色

```html
<u-subsection active-color="#ff9900"></u-subsection>
```

### 设置滑块长度

只有`mode`为`tabs`时，可以设置底部的滑块长度，单位rpx

```html
<u-subsection :bar-width="50"></u-subsection>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 选项的数组，形式见上方"基本使用" | Array | - | - |
| current | 初始化时默认选中的选项索引值  | String \| Number | 0 | - |
| active-color | 激活时的颜色，`mode`为`subsection`时固定为白色 | String | #ff9900 | - |
| un-active-color | 未激活时字体的颜色，`mode`为`subsection`时无效 | String | #303133 | true |
| mode | 模式选择，，见上方说明 | String | button | text |
| font-size | 字体大小，单位rpx | String \| Number | 28 | - |
| animation | 是否开启动画效果，见上方说明 | Boolean | true | false |
| barWidth | `mode`为`text`时，底部滑块的长度，单位rpx | String \| Number | 40 | - |
| bold | 激活选项的字体是否加粗 | Boolean | true | false |
| bg-color | 组件背景颜色，`mode`为`button`时有效 | String | #eeeeef | - |
| button-color | 按钮背景颜色，`mode`为`button`时有效 | String | #ffffff | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 分段器选项发生改变时触发 | index：选项的index索引值，从0开始 | - |
