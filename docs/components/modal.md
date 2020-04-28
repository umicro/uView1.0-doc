## Modal 模态框

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

<demo-model url="/pages/componentsA/modal/index"></demo-model>


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

默认情况下，模态框只有一个`确认`按钮：
- 请至少要配置弹框的内容参数`content`。
- 通过`v-model`绑定一个布尔变量来控制模态框的显示与否。

```html
<template>
	<view>
		<u-modal v-model="show" :content="content"></u-modal>
		<u-button @click="open">
			打开模态框
		</u-button>
	</view>
</template>
	
<script>
	export default {
		data() {	
			return {
				show: false,
				content: '东临碣石，以观沧海'
			}
		},
		methods: {
			open() {
				this.show = true;
			}
		}
	}
</script>
```

### 传入富文本内容

有时候我们需要给模态框的内容，不一定是纯文本的字符串，可能会需要换行，嵌入其他元素等，这时候我们可以使用`slot`功能，再结合uni-app`rictText`组件，
就能传入富文本内容了，如下演示：

**注意：** 传入自定义内容的话，由于微信小程序的特殊原因，需要设置`content-slot`为`true`

```html
<template>
	<view>
		<u-modal v-model="show" :title-style="{color: 'red'}" :content-slot="true">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		<u-button @click="open">
			打开模态框
		</u-button>
	</view>
</template>
	
<script>
	export default {
		data() {	
			return {
				show: false,
				content: `
					空山新雨后<br>
					天气晚来秋
				`
			}
		},
		methods: {
			open() {
				this.show = true;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.slot-content {
		font-size: 28rpx;
		color: $u-content-color;
		padding-left: 30rpx;
	}
</style>
```


### 控制模态框宽度

可以通过设置`width`参数控制模态框的宽度，此值可以为数值(单位rpx)，百分比，`auto`等。


```html
<u-modal v-model="show" width="70%"></u-modal>
```


### 自定义样式

此组件有完善的自定义功能，可以配置标题，内容，按钮等样式(传入对象形式)，具体参数详见底部的API说明

```html
<u-modal v-model="show" :title-style="{color: 'red'}"></u-modal>
```


### 缩放效果

开启缩放效果，在打开和收起模态框的时候，会带有缩放效果，具体效果请见示例，此效果默认开启，通过`zoom`参数配置

```html
<u-modal v-model="show" :zoom="false"></u-modal>
```


### API

### Switch Props

注意：需要给`modal`组件通过`v-model`绑定一个布尔值，来初始化`modal`的状态，随后该值被双向绑定。

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| show | 是否显示模态框，请赋值给`v-model` | Boolean  | false | true |
| z-index | 层级  | String \| Number | 1075 | - |
| title | 标题内容  | String | 提示 | - |
| width | 模态框宽度，数值时单位为rpx | String \| Number  | 600 | 百分比 / auto |
| content | 模态框内容 | String  | 内容 | - |
| content-slot | 是否通过`slot`传入自定义的内容 | Boolean  | false | true |
| show-title | 是否显示标题 | Boolean  | true | false |
| show-confirm-button | 是否显示确认按钮 | Boolean  | true | false |
| show-cancel-button | 是否显示取消按钮 | Boolean  | false | true |
| confirm-text | 确认按钮的文字 | String  | 确认 | - |
| cancel-text | 取消按钮的文字 | String  | 取消 | - |
| cancel-color | 取消按钮的颜色 | String  | #606266 | - |
| confirm-color | 确认按钮的颜色 | String  | #2979ff | - |
| border-radius | 模态框圆角值，单位rpx | String \| Number  | 16 | - |
| title-style | 自定义标题样式，对象形式 | Object  | - | - |
| content-style | 自定义内容样式，对象形式 | Object  | - | - |
| cancel-style | 自定义取消按钮样式，对象形式 | Object  | - | - |
| confirm-style | 自定义确认按钮样式，对象形式 | Object  | - | - |
| zoom | 是否开启缩放模式 | Boolean  | true | false |


### Switch Event

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |



### Slots

| 名称 | 说明 |
|:-|:-|
| default | 传入自定义内容，一般为富文本，见上方说明 |


<style scoped>
h3[id=slots] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>