## Sticky 吸顶

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

通过slot传入内部内容即可，要传入props的`index`参数，用于点击时，在回调方法中对某一个数据进行操作

```html
<template>
	<view>
		<u-swipe-action :index="index" v-for="(item, index) in listData" :key="item.title" @click="onRemove(index)">
			<view class="cell u-border-bottom">
				<view class="cell__hd">
					<image mode="aspectFill" :src="item.images" />
				</view>
				<view class="cell__bd">
					<view class="title u-line-2">{{ item.title }}</view>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						title: '美国麻省理工学院科研团队19日宣布，其开发的人工智能程序“深度角色”',
						images: '/static/logo.png'
					},
					{
						title: '究人员让“深度角色”参与了超过4000轮在线桌游“抵抗组织',
						images: '/static/logo.png'
					},
					{
						title: '同时掩藏自己的身份。结果，不论作为“好人”还是“坏人”，“深度角色”都比人类玩家表现更加出色',
						images: '/static/logo.png'
					}
				]
			};
		},
		methods: {
			onRemove(index) {
				this.listData.splice(index, 1);
				uni.showToast({
					title: `删除了第${index}个cell`,
					icon: 'none'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cell {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 12rpx;
	}

	.title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 2;
		font-size: 30rpx;
		margin-top: 30rpx;
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
| btn-bg-color | 按钮背景颜色 | String  | #FF0033 | - |
| index | 标识符，点击时候用于区分点击了哪一个，用循环的index即可 | String \| Number  | - | - |
| btnWidth | 按钮宽度，单位rpx | String \| Number  | 90 | - |	

### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| click | 点击组件时触发 | index: 通过props传递的`index` | - |