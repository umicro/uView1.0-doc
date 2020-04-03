## Checkbox 复选框

复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 该组件一般需要搭配`checkboxGroup`组件使用，以便用户进行操作时，获得当前复选框组的选中情况，当然，您也可以单独对某个`checkbox`进行事件监听
- 通过`v-model`给`checkboxGroup`绑定一个变量，这个绑定的变量是双向的(初始值只能是`true`或者`false`)，也就是说，您可以无需监听`checkbox`或者`checkboxGroup`组件的`change`事件，也能知道哪个复选框
被勾选了


```html
<template>
	<view class="">
		<u-checkbox-group @change="checkboxGroupChange">
			<u-checkbox 
				@change="checkboxChange" 
				v-model="item.checked" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
			>{{item.name}}</u-checkbox>
		</u-checkbox-group>
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
			]
		};
	},
	methods: {
		// 选中某个复选框时，由checkbox时触发
		checkboxChange(e) {
			//console.log(e);
		},
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange(e) {
			// console.log(e);
		}
	}
};
</script>
```

### 禁用checkbox

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后
再禁用，会有灰色的已勾选的图标，但此时依然是不可操作的。

```html
<u-checkbox v-model="checked" :disabled="false">天涯</u-checkbox>
```

### 自定义形状

可以通过设置`shape`为`square`或者`circle`，将复选框设置为方形或者圆形


```html
<u-checkbox v-model="checked" square="circle">明月</u-checkbox>
```


### 自定义颜色

此处所指的颜色，为`checkbox`选中时的背景颜色，参数为`active-color`


```html
<u-checkbox v-model="checked" active-color="red">光影</u-checkbox>
```


### 文本是否可点击

设置`label-disabled`为`false`，点击文本时，无法操作`checkbox`



```html
<u-checkbox v-model="checked" :label-disabled="false">剑舞</u-checkbox>
```


### API

### Checkbox Props

注意：需要给`checkbox`组件通过`v-model`绑定一个**布尔值**，来初始化`checkbox`的状态，随后该值被双向绑定，
当用户勾选复选框时，该值在`checkbox`内部被修改为`true`，并反映到父组件，否则为`false`，换言之，您无需监听`checkbox`的`change`事件，也能
知道某一个`checkbox`是否被选中的状态

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| icon-size | 图标大小，单位rpx  | String \ Number | 24 | - |
| name | `checkbox`组件的标示符  | String \ Number | - | - |
| shape | 形状，见上方说明 | String  | circle | square |
| disabled | 是否禁用 | Boolean  | false | true |
| label-disabled | 点击文本是否可以操作`checkbox` | Boolean  | true | false |
| active-color | 选中时的颜色 | String  | #2979ff | - |



### CheckboxGroup Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| max | 最多能选中多少个`checkbox`  | String \ Number | 999 | - |
| disabled | 是否禁用所有`checkbox`  | Boolean | false | true |


### Checkbox Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 某个`checkbox`状态发生变化时触发，回调为一个对象 | detail = {value: [true或者false，true为被选中，否则反之], name: [通过props传递的`name`参数] } | - |


### CheckboxGroup Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 任一个`checkbox`状态发生变化时触发，回调为一个对象 | detail = array( [元素为被选中的`checkbox`的`name`] ) | - |