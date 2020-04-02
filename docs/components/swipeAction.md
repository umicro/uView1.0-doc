## SwipeAction 滑动操作

该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。

说明：该组件目前只能配置左滑唤出一个操作菜单

::: warning 注意
如果把该组件通过v-for用于左滑删除的列表，请保证循环的`:key`是一个唯一值，可以用数据的id或者title替代。
不能是数组循环的index，否则删除的时候，可能会出现数据错乱
:::

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过slot传入内部内容即可，可以将`v-for`的"index"索引值传递给`index`参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时会返回此索引值)  

说明：有时候，我们在打开一个swipeAction的同时，需要自动关闭其他的swipeAction，这时需要通过`open`事件实现，见如下：

```html
<template>
	<view>
		<u-swipe-action :index="index" v-for="(item, index) in list" :key="item.id" @click="click" @open="open">
			<view class="item u-border-bottom">
				<image mode="aspectFill" :src="item.images" />
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="title-wrap">
					<text class="title u-line-2">{{ item.title }}</text>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 1,
						title: '长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来',
						images: '/static/uView/common/logo.png',
						show: false,
					},
					{
						id: 2,
						title: '新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来',
						images: '/static/uView/common/logo.png',
						show: false
					},
					{
						id: 3,
						title: '登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇',
						images: '/static/uView/common/logo.png',
						show: false,
					}
				],
			};
		},
		methods: {
			click(index) {
				this.list.splice(index, 1);
				uni.showToast({
					title: `删除了第${index}个cell`,
					icon: 'none'
				});
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if(index != idx) this.list[idx].show = false;
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 12rpx;
	}
	
	.title {
		text-align: left;
		font-size: 28rpx;
		color: $u-content-color;
		margin-top: 20rpx;
	}
</style>
```

### 修改按钮样式

- 默认左滑出来的按钮文字为"删除"，可以通过`btn-text`修改文字内容
- 通过`btn-bg-color`修改按钮的背景颜色
- 通过`btn-width`设置按钮的宽度，单位rpx

```html
<u-swipe-action btn-text="收藏">
	...
</u-swipe-action>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| btn-text | 按钮文字  | String | 删除 | - |
| btn-bg-color | 按钮背景颜色 | String  | #ff0033 | - |
| bg-color | 整个组件背景颜色 | String  | #ffffff | - |
| index | 标识符，点击时候用于区分点击了哪一个，用`v-for`循环时的index即可 | String \| Number  | - | - |
| btn-width | 按钮宽度，单位rpx | String \| Number  | 180 | - |	
| disabled | 是否禁止某个swipeAction滑动 | Boolean  | false | true |	

### Event

|事件名|说明|回调参数|
|:-|:-|:-|
| click | 点击组件时触发 | index: 通过props传递的`index` |
| close | 组件触发关闭状态时 | index: 通过props传递的`index` | 
| open | 组件触发打开状态时 | index: 通过props传递的`index` | 