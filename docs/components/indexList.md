## IndexList 索引列表

通过折叠面板收纳内容区域

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

外层包裹一个`index-list`组件，内部锚点通过`index-anchor`组件传入，其余内容可以自定义
- 可以通过`index-list`参数自定义索引字符列表
- 需要监听页面的onPageScroll事件，将当前滚动条高度传入`index-list`组件

```html
<template>
	<u-index-list :scrollTop="scrollTop">
		<view v-for="(item, index) in indexList" :key="index">
			<u-index-anchor :index="item" />
			<view class="list-cell">
				列表1
			</view>
			<view class="list-cell">
				列表2
			</view>
			<view class="list-cell">
				列表3
			</view>
		</view>
	</u-index-list>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
```

### 自定义锚点样式

`index-anchor`锚点组件默认显示`index`参数的值，可以通过设置`use-slot`为`true`，传入自定义内容，同时设定
自己的样式

```html
<template>
	<u-index-list :scrollTop="scrollTop">
		<view v-for="(item, index) in indexList" :key="index">
			<u-index-anchor :use-slot="true">
				<text class="anchor-text">{{item}}</text>
			</u-index-anchor>
			<view class="list-cell">
				列表1
			</view>
			<view class="list-cell">
				列表2
			</view>
			<view class="list-cell">
				列表3
			</view>
		</view>
	</u-index-list>
</template>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
	
	.anchor-text {
		color: red;
	}
</style>
```

### API

### IndexBar Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| scroll-top | 当前滚动高度，自定义组件无法获得滚动条事件，所以依赖接入方传入 | Number \| String | - | - |
| index-list | 索引字符列表，数组  | Array[string \| number] | A-Z | - |
| z-index | 层级  | Number \| String | 1 | - |
| sticky | 是否开启锚点自动吸顶  | Boolean | true | false |
| offset-top | 锚点自动吸顶时与顶部的距离  | Number \| String | 0 | - |
| highlight-color | 锚点和右边索引字符高亮颜色  | String | #2979ff | - |

### IndexAnchor Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| use-slot | 是否使用自定义内容的插槽  | Boolean | false | true |
| index | 索引字符，如果定义了`use-slot`，此参数自动失效   | String \| Number | - | - |
| custStyle | 自定义样式，对象形式，如"{color: 'red'}"  | Object | - | - |


### IndexBar Events

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| select | 选中右边索引字符时触发 | index: 索引字符 | - |
 
 ### IndexAnchor Slots

| 名称 | 说明 |
|:-|:-|
| default | 锚点位置显示内容，默认为索引字符 |