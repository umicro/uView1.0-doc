## TopTips 顶部提示

该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

该组件通过`ref`调用，使用简单，只需`title`参数设置显示的内容即可  

注意：不要在onLoad中调用，因为onLoad生命周期尚未创建完成组件

```html
<template>
	<u-top-tips ref="uTips"></u-top-tips>
</template>

<script>
	export default {
		onReady() {
			this.$refs.uTips.show({
				title: '铁马冰河入梦来'
			})
		}
	}
</script>
```

### 其他设置

- `type`值可选的有`primary`(默认)、`success`、`info`、`warning`、`error`
- `duration`值设置现实的时间，单位ms

```html
<u-top-tips ref="uTips" type="success" duration="1500"></u-top-tips>
```

### API

### Methods

调用方法如上方"基本使用"中所示

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| title | 要现实的内容  | String | - | - |
| type | 主题选择  | String | primary | success / info / warning / error |
| duration | 显示的时间，单位ms | 2000  | - |
