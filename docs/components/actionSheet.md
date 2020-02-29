## ActionSheet 操作菜单

本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。  
本组件功能类似于uni的`uni.showActionSheet`API，优点是配置更加灵活，所有平台都表现一致。缺点是在vue上，遮罩是无法覆盖原生组件的，如`map`，`video`等。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`item-list`设置需要显示的菜单，该值为一个数组，元素为对象，对象至少要提供`text`属性，另外可选的有`fontSize`(字体大小)，`color`(颜色)
- 通过`show`参数控制操作菜单的显示与否

::: warning 注意
需要在`close`回调事件中，设置`show`为`false`，否则无法弹起第二次ActionSheet，这是因为`props`传递参数特性限制导致的
:::

```html
<template>
	<u-action-sheet :itemList="itemList" :show="show" @close="show = false"></u-action-sheet>
</template>

<script>
	export default {
		data() {
			itemList: [{
				text: '点赞',
				color: 'blue',
				fontSize: 28
			}, {
				text: '分享'
			}, {
				text: '评论'
			}],
			show: true
		}
	}
</script>
```

### 配置顶部的提示信息和底部取消按钮

- `tips`参数为一个对象类型，属性可以设置`text`，`fontSize`(字体大小)，`color`(颜色)，文本内容将会显示组件的上方，起提示作用。
- `cancel-btn`参数配置是否显示底部的取消按钮，默认显示

```html
<template>
	<u-action-sheet :itemList="itemList" :show="show" :tips="tips" :cancel-btn="true"></u-action-sheet>
</template>

<script>
	export default {
		data() {
			tips: {
				text: '在水一方',
				color: '#909399',
				fontSize: 24
			},
			itemList: [{
				text: '点赞',
				color: 'blue',
				fontSize: 28
			}],
			show: true
		}
	}
</script>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| show | 操作菜单的显示与否  | Boolean | false | true |
| item-list | 按钮的文字数组，见上方文档示例  | Array\<Object\>	 | [ ] | - |
| tips | 顶部的提示文字，见上方文档示例 | Object  | - | - |
| cancel-btn | 是否显示底部的取消按钮 | Boolean  | true | false |
| mask-close-able | 点击遮罩是否可以关闭 | Boolean  | true | false |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/guide/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |


### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| click | 点击ActionSheet列表项时触发 | index: 点击了第几个，从0开始 | - |

