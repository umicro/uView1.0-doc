## Rate 评分

该组件一般用于满意度调查，星型评分的场景。该组件有如下特点：
- 可以滑动触发选择
- 可以设置半星评价

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`number`参数设置需要显示多少颗星星
- 通过`current`设置初始化时默认选中的星星数量

```html
<template>
	<u-rate :number="number" :current="2"></u-rate>
</template>

<script>
	export default {
		data() {
			return {
				number: 4
			}
		}
	}
</script>
```

### 设置未选中时星星的形状

- 通过`plain`属性配置未选中星星的形状，如果为`true`，未选中的星星会是镂空状态，如果为`false`(默认)，未选中的星星会是实心状态

```html
<u-rate :plain="true"></u-rate>
```

### 自定义样式

- 通过`active`设置选中的星星的颜色
- 通过`un-active`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```html
<u-rate :active="#FA3534" :un-active="#b2b2b2" :gutter="20"></u-rate>
```

### 半星

```html
<u-rate :allow-half="true"></u-rate>
```

### 最少选中的数量

```html
<u-rate :min-num="5"></u-rate>
```

### 禁用状态

禁用下，无法点击或者滑动选择，可以通过`current`设置默认选中的数量

```html
<u-rate :disabled="true"></u-rate>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| number | 最多可选的星星数量 | String \| Number | 5 | - |
| current | 默认选中的星星数量  | String \| Number | 0 | - |
| disabled | 是否禁止用户操作 | Boolean | false | true |
| size | 星星的大小，单位rpx | String \| Number | 32 | - |
| un-active-color | 未选中星星的颜色 | String | #b2b2b2 | - |
| active-color | 选中的星星颜色 | String | #FA3534 | - |
| plain | 未选中的星星是否启用镂空状态 | Boolean | false | true |
| gutter | 星星之间的距离 | String | #323233 | - |
| min-num | 最少选中星星的个数 | String \| Number | 0 | - |
| allow-half | 是否允许半星选择 | Boolean | false | true |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 选中的星星发生变化时触发 | value：当前选中的星星的数量 | - |
