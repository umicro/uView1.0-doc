## verificationCode 验证码倒计时

考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语也各有不同，所以本组件
不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

操作前，需要在`onReady`生命周期通过ref获取组件对象，再执行后面的操作，见下方示例。

1. 通过`seconds`设置需要倒计的秒数(默认`60`)
2. 通过ref调用组件内部的`start`方法，开始倒计时
3. 通过监听`change`事件(开始和结束倒计时结束期间，每秒触发一次)获得提示的文字，可能值如"获取验证码|12秒后重新获取|重新获取"，可以自定义

注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的`canGetCode`变量，在倒计时
过程中，该值为`false`，如果为`false`应该给予提示并不要再次向后端请求验证码，如果为`true`，则为获取验证码
之前，或者倒计结束之后，可以再次向后端请求验证码。

以下为完整示例，这里使用了"this.$u.success | this.$u.error | this.$u.warning"，由于uniapp不支持
通过JS插入元素，要求页面必须引入了"\<u-toast ref="uToast">\</u-toast>"这一句，见如下： 

```html
<template>
	<view class="wrap">
		<u-toast ref="uToast"></u-toast>
		<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
		@change="codeChange"></u-verification-code>
		<u-button @tap="getCode">{{tips}}</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				refCode: null,
				seconds: 10,
			}
		},
		// 注意，只能在onReady生命周期获取ref，因为onLoad周期组件尚未创建完成
		onReady() {
			this.refCode = this.$refs.uCode;
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(this.refCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.success('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.refCode.start();
					}, 2000);
				} else {
					this.$u.error('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.warning('倒计时结束');
			},
			start() {
				this.$u.success('倒计时开始');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24upx;
	}
</style>
```

### 自定义提示语

组件内部有内置的提示语，如获取验证码前的提示语为"获取验证码"，用户可以通过参数配置自定义的提示：
- 获取前，参数为`startText`，默认值为"获取验证码"
- 倒计时期间，参数为`changeText`，默认为"X秒重新获取"，这里的"x"(大小写均可)，将会被倒计的秒数替代
- 倒计时结束，参数为`endText`，默认值为"重新获取"

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| seconds | 倒计时所需的秒数  | Number \| String | 60 | - |
| start-text | 开始前的提示语，见上方说明  | String | 获取验证码 | - |
| change-text | 倒计时期间的提示语，必须带有字母"x"，见上方说明 | String  | X秒重新获取 | - |
| end-text | 倒计结束的提示语，见上方说明 | String  | 重新获取 | - |


### Methods

需要通过ref获取验证码组件才能调用，见上方"基本使用"说明


| 名称          | 说明            |
|-------------  |---------------- |
| start | 开始倒计时  |
| reset | 结束当前正在进行中的倒计时，设置为可以重新获取验证码的状态  |


### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 倒计时期间，每秒触发一次 | text: 当前剩余多少秒的状态，见上方说明 | - |
| start | 开始倒计时触发 | - | - |
| end | 结束倒计时触发 | - | - |
