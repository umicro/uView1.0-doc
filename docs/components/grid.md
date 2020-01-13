## Grid 宫格布局

宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件([badge](/components/badge.html))，或者图标等，也可以扩展为左右滑动的轮播形式。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 该组件外层为`u-grid`组件包裹，通过`col`设置内部宫格的列数
- 内部通过`ugrid-item`组件的`slot`设置宫格的内容
- 如果不需要宫格的边框，可以设置`show-border`为`false`

```html
<template>
	<u-grid :col="3">
		<u-grid-item>
			<u-icon name="photo" :size="46"></u-icon>
			<view class="grid-text">图片</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="lock" :size="46"></u-icon>
			<view class="grid-text">锁头</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="hourglass" :size="46"></u-icon>
			<view class="grid-text">沙漏</view>
		</u-grid-item>
	</u-grid>
</template>

<style scoped lang="scss">
	.grid-text {
		font-size: 28upx;
		margin-top: 4upx;
		color: $u-type-info;
	}
</style>
```

### 给宫格设置右上角的角标和图标

可以通过uView的`badge`或者`image`设置宫格有右上角的内容

```html
<template>
	<u-grid :col="3">
		<u-grid-item>
			<u-badge count="9" :offset="[20, 20]"></u-badge>
			<u-icon name="photo" :size="46"></u-icon>
			<view class="grid-text">图片</view>
		</u-grid-item>
		<u-grid-item>
			<image src="/static/image/icon/hot5.png" class="badge-icon"></image>
			<u-icon name="lock" :size="46"></u-icon>
			<view class="grid-text">锁头</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="hourglass" :size="46"></u-icon>
			<view class="grid-text">沙漏</view>
		</u-grid-item>
	</u-grid>
</template>

<style scoped lang="scss">
	.badge-icon {
		position: absolute;
		top: 14rpx;
		right: 40rpx;
		width: 30rpx;
		height: 30rpx;
	}
	
	.grid-text {
		font-size: 28upx;
		margin-top: 4upx;
		color: $u-type-info;
	}
</style>
```

### 结合uni的`swiper`实现左右滑动的宫格

因为`swiper`特性的关系，请指定`swiper`的高度 ，否则`swiper`的高度不会被内容撑开，可以自定义`swiper`的指示器，达到更高的灵活度

```html
<template>
	<swiper class="swiper" :indicator-dots="true">
		<swiper-item>
			<u-grid :col="3">
				<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<u-icon :name="item" :size="46"></u-icon>
					<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
				</u-grid-item>
			</u-grid>
		</swiper-item>
		<swiper-item>
			<u-grid :col="3">
				<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<u-icon :name="item" :size="46"></u-icon>
					<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
				</u-grid-item>
			</u-grid>
		</swiper-item>
		<swiper-item>
			<u-grid :col="3">
				<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<u-icon :name="item" :size="46"></u-icon>
					<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
				</u-grid-item>
			</u-grid>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				list: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list']
			};
		}
	};
</script>

<style scoped lang="scss">
	.swiper {
		height: 500rpx;
	}
	
	.grid-text {
		font-size: 28upx;
		margin-top: 4upx;
		color: $u-type-info;
	}
</style>
```

### API

### Grid Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| col | 宫格的列数  | String \| Number | 3 | - |
| show-border | 是否显示宫格的边框  | Boolean	 | true | false |
| hover-class | 点击宫格的时候，添加的类，一般用于设置按下的样式(背景颜色) | String  | - | - |

### Grid-item Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| bg-color | 宫格的背景颜色  | String | #ffffff | - |
| index | 点击宫格时，返回的值  | String \| Number	 | - | - |

### Grid Event

注意：请在`<u-grid></u-grid>`上监听此事件

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
|click|点击宫格触发|index: `u-grid-item`通过`props`传递的`index`值|-|