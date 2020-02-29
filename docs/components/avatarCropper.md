## AvatarCropper 头像裁剪

该组件一般的图片裁剪需求场景，尤其适合于头像裁剪方面。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

组件使用流程：
1. 引用组件，将组件和页面其他内容分开为两个部分，裁剪的时候，隐藏页面其他结构页面
2. 配置基本参数(已默认配置好最优参数)
3. 选取图片，自动打开组件
4. 调整图片合适位置和大小，确定裁剪并返回此裁剪结果

这样注意的是使用了一个叫`isAvatar`的布尔变量来控制，页面主内容，为了避免裁剪后重新渲染，影响布局，使用了`display`而不是`v-if`控制显示，
而头像裁剪的区域，建议使用`v-if`处理，如下所示：

```html
<template>
	<view>
		<view class="wrap" :style="{display: !isAvatar ? 'block' : 'none'}">
			<u-toast ref="uToast"></u-toast>
			<view class="u-avatar-wrap">
				<image class="u-avatar-demo" v-if="avatar" :src="avatar" mode="aspectFill"></image>
			</view>
			<u-button @tap="chooseAvatar">选择图片</u-button>
		</view>
		<u-avatar-cropper v-if="isAvatar" :src="src" @onload="cropperSuccess"></u-avatar-cropper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '/static/uView/common/logo.png',
				src: '',
				isAvatar: false,
			}
		},
		methods: {
			chooseAvatar() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.src = res.tempFilePaths[0];
						this.isAvatar = true;
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24upx;
	}
	
	.u-avatar-wrap {
		overflow: hidden;
		margin-bottom: 20rpx;
		text-align: center;
	}
	
	.u-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
</style>
```


### 注意事项

- 以上演示中，默认用户在H5中使用系统的导航栏，而不是自定义的导航栏，进入裁剪页面，背景为黑色，故组件内部
在期间通过`uni.setNavigationBarColor`将导航栏改称为黑底白字，裁剪结束后改成白底黑字，如果您的导航栏
不是白底黑字，就需要您在裁剪完毕的`onload`事件回调中，手动通过`uni.setNavigationBarColor`调整为自己的样式，
可见上方示例

- 关于裁剪图片的来由，建议在页面打开裁剪区域之前，通过`uni.chooseImage`选取图片，通过`src`参数传递给组件内部，
打开组件后，左下角也有一个重新选择图片的按钮，可以再次选取图片

- 可以通过`file-type`设置生成的图片类型，默认为`jpg`，如果配置了`png`形式，发现生成的图片太大的话，请改回`jpg`

### bound-style参数说明

此为对象形式的样式，有三个属性，分别是：
- `lineWidth`为裁剪框的边框宽度，单位rpx
- `borderColor`为裁剪的边框颜色
- `mask`为裁剪图片操作过程中，框内以外区域的遮罩透明度，建议使用`rgba`颜色值

bound-style值默认如下：

```js
{
	lineWidth: 4,
	borderColor: 'rgb(245, 245, 245)',
	mask: 'rgba(0, 0, 0, 0.35)'
}
```


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| rect-width | 裁剪框的宽度，单位rpx  | String \| Number | 400 | - |
| rect-height | 裁剪框的高度，单位rpx  | String \| Number | 400 | - |
| dest-width | 裁剪生成的图片宽度，单位rpx  | String \| Number | 400 | - |
| dest-height | 裁剪生成的图片高度，单位rpx  | String \| Number | 400 | - |
| quality | 生成的图片质量  | String \| Number | 0.7 | (0, 1] |
| file-type | 生成的图片类型，推荐用"jpg" | String  | jpg | png |
| bound-style | 此为对象形式样式值，用于设置裁剪框的样式，见上方说明 | Object  | {} | - |
| src | 用于裁剪的图片路径，建议通过`uni.chooseImage`选取图片 | String  | - | - |


### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| onload | 用户确认生成裁剪图片时触发 | path: 生成的图片数据 | - |