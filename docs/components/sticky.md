## Sticky 吸顶

该组件与CSS中`position: sticky`属性实现的效果一致，当组件超出预设的到顶部距离时，
就会吸附在顶部，位置进入预设的顶部距离时，会重新按照正常的布局排列。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`slot`，将需要吸顶的内容放在`Sticky`组件中即可，`slot`中只能有一个根元素

```html
<template>
	<view class="container">
		<u-sticky>
			<!-- 只能有一个根元素 -->
			<view class="sticky">
				宝剑锋从磨砺出,梅花香自苦寒来
			</view>
		</u-sticky>
	</view>
</template>

<style lang="scss" scoped>
	.container {
		height: 200vh;
		margin-top: 150rpx;
	}
	
	.sticky {
		width: 750rpx;
		height: 120rpx;
		background-color: #2979ff;
		color: #fff;
		padding: 24rpx;
	}
</style>
```

### 吸顶距离

通过`offset-top`参数设置组件在吸顶时与顶部的距离

```html
<u-sticky offset-top="200">
	<view>
		塞下秋来风景异，衡阳雁去无留意
	</view>
</u-sticky>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| offset-top | 吸顶时与顶部的距离，单位rpx  | String \| Number | 0 | - |
| index | 自定义标识，用于区分是哪一个组件 | String \| Number  | - | - |
| enable | 是否开启吸顶功能 | Boolean  | true | false |
| h5-Nav-height | 导航栏高度，自定义导航栏时(无导航栏设置为`0`)，需要传入此值，单位px | Boolean  | 44 | - |

### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| fixed | 组件吸顶时触发 | index: 通过props传递的`index` | - |