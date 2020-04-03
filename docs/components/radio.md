## Radio 单选框

单选框用于有一个选择，用户只能选择其中一个的场景。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 该组件一般需要搭配`radioGroup`组件使用，以便用户进行操作时，获得当前单选框组的选中情况，当然，您也可以单独对某个`radio`进行事件监听
- 通过`v-model`给`radioGroup`绑定一个变量，这个绑定的变量是双向的(初始值只能是`true`或者`false`)，也就是说，您可以无需监听`radio`或者`radioGroup`组件的`change`事件，也能知道哪个
被勾选了


```html
<template>
	<view class="">
		<u-radio-group v-model="value" @change="radioGroupChange">
			<u-radio 
				@change="radioChange" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
				:disabled="item.disabled"
			>
				{{item.name}}
			</u-radio>
		</u-radio-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 'apple',
					checked: false,
					disabled: false
				},
				{
					name: 'banner',
					checked: false,
					disabled: false
				},
				{
					name: 'orange',
					checked: false,
					disabled: false
				}
			],
			value: '',
		};
	},
	methods: {
		// 选中某个单选框时，由radio时触发
		radioChange(e) {
			// console.log(e);
		},
		// 选中任一radio时，由radio-group触发
		radioGroupChange(e) {
			// console.log(e);
		}
	}
};
</script>
```

### 禁用radio

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后
再禁用，会有灰色的勾选的图标，但此时依然是不可操作的。

```html
<u-radio v-model="value" :disabled="true">明月几时有</u-radio>
<u-radio v-model="value" :disabled="false">把酒问青天</u-radio>
```

### 自定义形状

可以通过设置`shape`为`square`或者`circle`，将复选框设置为方形或者圆形


```html
<u-radio v-model="value" square="circle">月明人倚楼</u-radio>
```


### 自定义颜色

此处所指的颜色，为`radio`选中时的背景颜色，参数为`active-color`


```html
<u-radio v-model="value" active-color="red">思悠悠，恨悠悠，恨到归时方始休</u-radio>
```


### 文本是否可点击

设置`label-disabled`为`false`，点击文本时，无法操作`radio`


```html
<u-radio v-model="value" :label-disabled="false">门掩黄昏，无计留春住</u-radio>
```


### API

### Radio Props

注意：需要给`radioGroup`组件通过`v-model`绑定一个**布尔值**，来初始化`radio`的状态，随后该值被双向绑定，
当用户勾选复选框时，该值在`radio`内部被修改为`true`，并反映到父组件，否则为`false`，换言之，您无需监听`radio`的`change`事件，也能
知道某一个`radio`是否被选中的状态

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| icon-size | 图标大小，单位rpx  | String \ Number | 24 | - |
| name | `radio`组件的标示符  | String \ Number | - | - |
| shape | 形状，见上方说明 | String  | circle | square |
| disabled | 是否禁用 | Boolean  | false | true |
| label-disabled | 点击文本是否可以操作`radio` | Boolean  | true | false |
| active-color | 选中时的颜色 | String  | #2979ff | - |



### radioGroup Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| disabled | 是否禁用所有`radio`  | Boolean | false | true |


### radio Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 某个`radio`状态发生变化时触发(选中状态) | name: 通过`props`传递的`name`参数 | - |


### radioGroup Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 任一个`radio`状态发生变化时触发 | name: 值为`radio`通过`props`传递的`name`值 | - |