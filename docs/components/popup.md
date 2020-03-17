## Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 弹出层的内容通过`slot`传入，由用户自定义
- 通过`show`参数控制弹出层的打开和收起

:::warning 注意
由于props单向流动的特性，您需要在popup组件的`close`事件回调中把`show`设置为`false`，否则无法第二次
唤起popup
:::

```html
<template>
	<u-popup :show="show" @close="show = false">
		<view>出淤泥而不染，濯清涟而不妖</view>
	</u-popup>
</template>
```

### 设置弹出层的方向

- 可以通过`mode`参数设置，可以设置为`left`、`top`、`right`、`bottom`、`center`

```html
<template>
	<u-popup :show="true" mode="top">
		<view>
			人生若只如初见，何事秋风悲画扇
		</view>
	</u-popup>
</template>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| show | 是否打开弹出层  | Boolean | false | true |
| mode | 弹出方向  | String	 | left | top / right / bottom / center |
| mask | 是否显示遮罩  | Boolean | true | false |
| length | 抽屉的宽度(mode=left \| right)，或者高度(mode=top \| bottom)，单位upx。如果为"auto"，表示由内容撑开高度或者宽度 | String \| Number | 400 | - |
| zoom | 是否开启缩放动画，只在`mode`为`center`时有效  | Boolean | true | false |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/guide/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |
| mask-close-able | 点击遮罩是否可以关闭弹出层  | Boolean | true | false |
| custom-style | 用户自定义样式  | Object | - | - |

### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| open | 弹出层打开 | - | - |
| close | 弹出层收起 | - | - |