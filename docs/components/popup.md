## Popup 弹出层

<demo-model url="/pages/componentsC/popup/index"></demo-model>


弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 弹出层的内容通过`slot`传入，由用户自定义
- 通过`v-model`绑定一个布尔值的变量控制弹出层的打开和收起


```html
<template>
	<u-popup v-model="show">
		<view>出淤泥而不染，濯清涟而不妖</view>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>
```

### 设置弹出层的方向

- 可以通过`mode`参数设置，可以设置为`left`、`top`、`right`、`bottom`、`center`

```html
<template>
	<u-popup v-model="show" mode="top">
		<view>
			人生若只如初见，何事秋风悲画扇
		</view>
	</u-popup>
</template>
```

### 设置弹出层的圆角

可以给`border-radius`设置一个值来给弹窗增加圆角，单位rpx。

```html
<template>
	<u-popup v-model="show" mode="top" border-radius="14">
		<view>
			人生若只如初见，何事秋风悲画扇
		</view>
	</u-popup>
</template>
```

### API

### Props

注意：props中没有控制弹窗打开与收起的参数，因为这是通过v-model绑定变量实现的，见上方说明。

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| mode | 弹出方向  | String	 | left | top / right / bottom / center |
| mask | 是否显示遮罩  | Boolean | true | false |
| length | mode=left \| right时表现为弹出层的宽度，mode=top \| bottom时表现为弹出层高度，单位rpx。如果为"auto"，表示由内容撑开高度或者宽度 | String \| Number | auto | - |
| zoom | 是否开启缩放动画，只在`mode`为`center`时有效  | Boolean | true | false |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |
| mask-close-able | 点击遮罩是否可以关闭弹出层  | Boolean | true | false |
| custom-style | 用户自定义样式  | Object | - | - |
| border-radius | 弹窗圆角值  | Number \| String | 0 | - |

### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| open | 弹出层打开 | - | - |
| close | 弹出层收起 | - | - |