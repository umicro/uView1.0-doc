## Keyboard 键盘
此为uViw自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3中模式，都有可以打乱按键顺序的选项。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`mode`参数定义键盘的类型，`show`为`true`，打开键盘
- mode = number (默认值)为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"
- mode = car为 键汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"
- mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"

```html
<u-keyboard ref="uKeyboard" mode="car" :show="true"></u-keyboard>
```

### 控制键盘顶部的工具条

- 通过`tooltip`参数配置是否显示显示顶部的工具条，默认为`true`
- 通过`tips`参数修改工具条中间的提示文字
- 通过`cancelBtn`参数配置是否显示工具条左边的"取消"按钮
- 通过`confirmBtn`参数配置是否显示工具条右边的"完成"按钮

```html
<u-keyboard mode="car" tips="请输入车牌号" :cancelBtn="false"></u-keyboard>
```

### 是否显示键盘的点(".")按键

该按键通过`dot-enable`(默认为`true`)参数配置，只在"mode = number"时生效，因为车牌号和身份证键盘，用不到"."这个按键

```html
<u-keyboard ref="uKeyboard" mode="number" :dot-enable="false"></u-keyboard>
```

### 是否打乱按键的顺序

如果配置`random`参数为`true`的话，**每次**打开键盘，按键的顺序都是随机的，该功能默认是关闭的

```html
<u-keyboard ref="uKeyboard" mode="number" :random="true"></u-keyboard>
```

### 如何控制键盘的打开和关闭？

通过`show`参数设置为`true`或者`false`来打开或者关闭键盘

::: warning 注意
1. 如果想一进入页面就打开键盘，不能在onLoad生命周期中设置`show`为`true`打开键盘，因为此时组件可能尚未
创建完毕，无法打开，应该在onReady生命周期调用  
2. 由于`props`特性的限制，要在`keyboard`组件的`close`回调事件中设置`show`为`false`，否则无法再次唤起键盘
:::

```html
<template>
	<u-keyboard mode="number" @close="show = false"></u-keyboard>
</template>

<script>
	export default {
		onReady() {
			// 如果想一进入页面就打开键盘，请在此生命周期调用
			this.show = true;
		},
		onLoad() {
			// 不应在此调用，因为此时u-keyboard组件尚未创建完成
			// this.show = true;
		}
	}
</script>
```

### 如何监听键盘按键被点击？

- 输入值是通过组件的`change`事件实现的，组件内部每个按键被点击的时候，组件就会发出一个`change`事件，回调参数为点击的按键的值。  
- 通过`backspace`事件监听键盘退格键的点击，通过修改父组件的值实现退格的效果，见下方示例

注意：点击退格键(也即删除键)不会触发`change`事件

```html
<template>
	<u-keyboard mode="number" @change="valChange" @backspace="backspace"></u-keyboard>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
			// 按键被点击(点击退格键不会触发此事件)
			valChange(val) {
				// 将每次按键的值拼接到value变量中，注意+=写法
				this.value += val;
				console.log(this.value);
			},
			// 退格键被点击
			backspace() {
				// 删除value的最后一个字符
				if(this.value.length) this.value = this.value.substr(0, this.value.length - 1);
				console.log(this.value);
			}
		}
	}
</script>
```

### API

### Props

| 参数      | 说明        | 类型     |  默认值  |  可选值   |
|-----------|-----------|----------|----------|---------|
| mode | 键盘类型，见上方`基本使用`的说明  | String | number | car / card |
| dot-enable | 是否显示"."按键，只在mode=number时有效 | Boolean  | true | false |
| show | 显示或隐藏键盘 | Boolean  | false | true |
| tooltip | 是否显示键盘顶部工具条 | Boolean  | true | false |
| tips | 工具条中间的提示文字，见上方`基本使用`的说明，如不需要，请传""空字符 | String  | - | - |
| cancel-btn | 是否显示工具条左边的"取消"按钮 | Boolean  | true | false |
| confirm-btn | 是否显示工具条右边的"完成"按钮 | Boolean  | true | false |
| random | 是否打乱键盘按键的顺序 | Boolean  | false | true |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |
| mask-close-able | 是否允许点击遮罩收起键盘 | Boolean  | true | false |

### Events

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 按键被点击(不包含退格键被点击) | 按键的值，见上方说明和示例 | - |
| close | 键盘被收起，点击工具条的"完成"和"取消"按钮，或者点击遮罩(如果`mask-close-able`为`true`的话)都会触发此事件 | - | - |
| cancel | 键盘顶部工具条左边的"取消"按钮被点击 | - | - |
| confirm | 键盘顶部工具条右边的"完成"按钮被点击 | - | - |
| backspace | 键盘退格键被点击 | - | - |

### Slot

|名称|说明|版本|
|:-|:-|:-|
| default | 内容将会显示键盘的工具条上面，可以结合[MessageInput 验证码输入](/components/messageInput.html)组件实现类似支付宝输入密码时，上方显示输入内容的功能 |  - |


