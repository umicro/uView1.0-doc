## NumberBox 步进输入框

该组件一般用于商城购物选择物品数量的场景

注意：该输入框只能输入大于或等于0的整数，不支持小数输入

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`value`(默认为1)参数输入初始值，通过`change`事件监听组件输入值的变化，回调参数为一个对象，有两个属性，分别是：
- `value`，表示当前输入值
- `index`，额外字段，由用户通过Props的`index`字段传入，回调时用以区分当前发生变化的是哪个输入框

```html
<template>
	<u-number-box :value="0" @change="valChange"></u-number-box>
</template>

<script>
	export default {
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>
```

### 步长设置

- 通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为1

```html
<u-number-box :step="2"></u-number-box>
```

### 限制输入范围

通过`min`和`max`参数限制输入值最小值和最大值

```html
<u-number-box :min="1" :max="100"></u-number-box>
```

### 禁用状态

通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值

```html
<u-number-box :disabled="true"></u-number-box>
```

### 自定义大小

- 通过`input-width`参数设置输入框的宽度
- 通过`input-height`参数设置输入框和按钮的高度，单位都是rpx

```html
<u-number-box :input-height="100" :input-height="60"></u-number-box>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| value | 输入框初始值 | Number | 1 | - |
| bg-color | 输入框和按钮的背景颜色  | String | #F2F3F5 | - |
| min | 用户可输入的最小值 | Number | 0 | - |
| max | 用户可输入的最大值 | Number | 99 | - |
| step | 步长，每次加或减的值 | Number | 1 | - |
| disabled | 是否禁用操作，禁用后无法加减或修改输入框的值 | Boolean | false | true |
| size | 输入框文字和按钮字体大小，单位rpx | String \| Number | 26 | - |
| color | 输入框文字和加减按钮颜色 | String | #323233 | - |
| input-width | 输入框宽度，单位rpx | String \| Number | 80 | - |
| input-height | 输入框和按钮的高度，单位rpx | String \| Number | 50 | - |
| index | 事件回调时用以区分当前发生变化的是哪个输入框 | String \| Number | - | - |

### Events

详细解释见上方说明

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 输入框内容发生变化时触发 | value：输入框当前值，index：通过props传递的`index`值 | - |
| blur | 输入框失去焦点时触发 | value：输入框当前值，index：通过props传递的`index`值 | - |
| minus | 点击减少按钮时触发(按钮可点击情况下) | value：输入框当前值，index：通过props传递的`index`值 | - |
| plus | 点击增加按钮时触发(按钮可点击情况下) | value：输入框当前值，index：通过props传递的`index`值 | - |