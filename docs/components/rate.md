## Rate 评分

<demo-model url="/pages/componentsB/rate/index"></demo-model>


该组件一般用于满意度调查，星型评分的场景。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`count`参数设置总共有多少颗星星可选择
- 通过`current`设置初始化时默认选中的星星数量

```html
<template>
	<u-rate count="count" current="2"></u-rate>
</template>

<script>
	export default {
		data() {
			return {
				count: 4
			}
		}
	}
</script>
```

### 自定义样式

- 通过`active-color`设置选中的星星的颜色
- 通过`inactive-color`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```html
<u-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></u-rate>
```

### 自定义图标

- 通过`active-icon`设置激活的图标
- 通过`inactive-icon`设置未激活的图标

这里的使用的图标，只能是uView自带的图标名称，详见[Icon 图标](/components/icon.html)  

下方示例为使用心形图标替代默认的星星图标：

```html
<u-rate active-icon="heart-fill" inactive-icon="heart"></u-rate>
```

### 最少选中的数量

```html
<u-rate min-count="5"></u-rate>
```

### 禁用状态

禁用下，无法点击或者滑动选择，但是可以通过`current`设置默认选中的数量

```html
<u-rate :disabled="true"></u-rate>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| count | 最多可选的星星数量 | String \| Number | 5 | - |
| current | 默认选中的星星数量  | String \| Number | 0 | - |
| disabled | 是否禁止用户操作 | Boolean | false | true |
| size | 星星的大小，单位rpx | String \| Number | 32 | - |
| inactive-color | 未选中星星的颜色 | String | #b2b2b2 | - |
| active-color | 选中的星星颜色 | String | #FA3534 | - |
| gutter | 星星之间的距离 | String \| Number | 10 | - |
| min-count | 最少选中星星的个数 | String \| Number | 0 | - |
| active-icon | 选中时的图标名，只能为uView的内置图标 | String | star-fill | - |
| inactive-icon | 未选中时的图标名，只能为uView的内置图标 | String | star | - |

<!-- | allow-half | 是否允许半星选择 | Boolean | false | true | -->

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 选中的星星发生变化时触发 | value：当前选中的星星的数量 | - |
