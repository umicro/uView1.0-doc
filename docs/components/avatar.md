## Avatar 头像

本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`src`指定头像的路径即可简单使用，如果传递了`text`参数，`text`将会优先起作用


```html
<template>
	<u-avatar :src="src"></u-avatar>

	<u-avatar :text="text"></u-avatar>
</template>

<script>
	export default {
		data() {
			src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			text: '无头像'
		}
	}
</script>
```

### 头像类型

- `mode`参数指定头像的类型，取值`circle`为圆形，取值`square`为圆角方形

```html
<template>
	<u-avatar :src="src" mode="square"></u-avatar>
</template>

<script>
	export default {
		data() {
			src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
		}
	}
</script>
```

### 默认头像

如果头像加载失败，导致加载图片失败，将会显示一个默认的灰色头像


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| bg-color | 背景颜色，一般显示文字时用  | String | #ffffff | - |
| src | 头像路径，如加载失败，将会显示默认头像  | String	 | - | - |
| size | 头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx | String \| Number  | default | - |
| mode | 显示类型，见上方说明 | String  | circle | square |
| text | 用文字替代图片，级别优先于`src` | String  | - | - |
| img-mode | 头像图片的裁剪类型，与uni的`image`组件的`mode`参数一致，如效果达不到需求，可尝试传`widthFix`值 | String  | aspectFill | - |
| index | 用户传递的标识符值，如果是列表循环，可穿`v-for`的`index`值 | String  | - | - |



### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| click | 头像被点击 | index: 用户传递的标识符 | - |
