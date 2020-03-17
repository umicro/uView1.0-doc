## Swiper 轮播图

该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
- 内置多种指示器模式，可配置指示器位置
- 3D轮播图效果
- 可配置是否显示标题

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，元素为对象，见如下：
- `list`的image属性为轮播图的图片路径
- `list`的title属性为需要显示的标题

::: warning 注意
如果需要显示标题，还需要设置`show-title`参数为`true`
:::

```html
<template>
	<view class="wrap">
		<u-swiper :list="list"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: '/static/uView/swiper/swiper1.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/uView/swiper/swiper2.jpg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: '/static/uView/swiper/swiper3.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx;
	}
</style>
```

### 指示器类型

本组件内置了多种指示器，通过配置`mode`参数即可，有如下：
- `rect`-指示器为方块状
- `dot`-指示器为圆点
- `number`-指示器为数字
- `round`-激活的指示器为块状，未激活的未点状，为默认值
- `none`-不显示指示器

通过`indicator-pos`参数配置指示器的位置，有如下值：
- `topLeft`-指示器位于左上角
- `topCenter`-指示器位于上方中间位置
- `topRight`-指示器位于右上角
- `bottomLeft`-指示器位于左下角
- `bottomCenter`-指示器位于底部中间位置，为默认值
- `bottomRight`-指示器位于右下角

```html
<u-swiper :list="list" mode="dot" indicator-pos="bottomRight"></u-swiper>
```

### 是否开启3D效果

配置`effect3d`为`true`即可，该效果左右两天可以预览前后一个swiper-item的一部分

```html
<u-swiper :list="list" :effect3d="true"></u-swiper>
```

### 控制轮播效果

- `autoplay`-是否自动轮播，默认为`true`
- `interval`-前后两张图自动轮播的时间间隔
- `duration`-切换一张轮播图所需的时间
- `circular`-是否衔接滑动，即到最后一张时，是否可以直接转到第一张

```html
<u-swiper :list="list" duration="3000" :circular="false"></u-swiper>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 轮播图数据，见上方"基本使用"说明 | Array | - | - |
| title | 是否显示标题文字，需要配合`list`参数，见上方说明 | Boolean  | false | true |
| mode | 指示器模式，见上方说明 | String  | round | rect / dot / number / none |
| height | 轮播图组件高度，单位rpx | String \| Number  | 250 | - |
| indicator-pos | 指示器的位置 | String  | bottomCenter | topLeft / topCenter / topRight / bottomLeft / bottomRight |
| effect3d | 是否开启3D效果 | Boolean  | false | true |
| autoplay | 是否自动播放 | Boolean  | false | true |
| interval | 自动轮播时间间隔，单位ms | String \| Number  | 2500 | - |
| circular | 是否衔接播放，见上方说明 | Boolean  | true | false |
| duration | 切换一张轮播图所需的时间，单位ms | String \| Number  | 500 | - |
| border-radius | 轮播图圆角值，单位rpx | String \| Number  | 8 | - |
| title-style | 自定义标题样式 | Object  | - | - |
| img-mode | 图片的裁剪模式，详见[image组件裁剪模式](https://uniapp.dcloud.io/component/image) | String  | aspectFill | - |


### Events

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| click | 点击轮播图时触发 | index：点击的第几张图片，从0开始 | - |
