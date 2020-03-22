## Field 输入框

借助此组件，可以实现表单的输入， 有"text"和"textarea"类型的，此外，借助uView的`picker`和`actionSheet`组件可以快速实现上拉菜单，时间，地区选择等，
为表单解决方案的利器。


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|


### 基本使用

- 如果是表单组(连在一起的有多个`field`组件)，建议结合uView的`u-cell-group`组件使用，可以给`field`表单组提供上下边框
- 通过`v-model`，可以双向绑定输入框的值
- 通过`label`设置输入框左边的提示文字
- 通过`placeholder`指定个性化的提示语

```html
<template>
	<view class="">
		<u-cell-group>
			<u-field
				v-model="mobile"
				label="手机号"
				placeholder="请填写手机号"
			>
			</u-field>
			<u-field
				v-model="code"
				label="验证码"
				placeholder="请填写验证码"
			>
			</u-field>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: ''
			}
		}
	}
</script>
```


#### 自定义输入框类型

我们可以通过`type`参数来自定义输入框的类型，如果为`text`(默认)内部为`input`输入框，如果为`textarea`值，内部为`textarea`输入框，相比`input`输入框，
它的默认高度约为两个`input`的高度，且可以换行，同时组件高度也会自动增高，适用于需要多行输入的场景。

```html
<template>
	<view class="">
		<u-field
			v-model="mobile"
			label="手机号"
			placeholder="请填写手机号"
		>
		</u-field>
		
		<u-field
			v-model="mobile"
			label="手机号"
			placeholder="请填写手机号"
			type="textarea"
		>
		</u-field>
	</view>
</template>
```


#### 必填和错误提示

- 通过设置`required`，可以给输入框左边添加一个红色的"*"号，它只起提示作用，uView内部不会判断用户是否输入了值，您需要提交的时候，通过`v-model`绑定的值自行判断
- 通过设置`error-message`，会在输入框下方给用红色给出错误提示

```html
<template>
	<view class="">
		<u-field
			v-model="mobile"
			label="手机号"
			required
			error-message="手机号有误"
		>
		</u-field>
	</view>
</template>
```


#### 在输入框尾部插入按钮

此为在表单填写时，可能需要用户发送验证码的场景，可以通过`slot`插入一个uView的[button](/components/button.html)组件，通过结合uView的[VerificationCode](/components/verificationCode.html)，
可以简单，迅速的将功能集成

```html
<template>
	<view class="">
		<u-cell-group>
			<u-field
				v-model="code"
				label="验证码"
				placeholder="请填写验证码"
			>
				<u-button size="mini" slot="button" type="success" @tap="getCode">{{codeText}}</u-button>
			</u-field>
			<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				codeText: ''
			}
		},
		methods: {
			codeChange(text) {
				this.codeText = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 1000);
				}else {
					this.$u.toast('倒计时结束后再发送');
				}
			}
		}
	}
</script>
```


#### 如何与Picker或者actionSheet等组件结合

某些场景，比如需要用用户选择性别，或者时间，地区选择等，我们可以结合uView的[ActionSheet](/components/actionSheet.html)和[Picker](/components/picker.html)组件解决，
这种情况，一般都是要求`field`组件是不可输入内容的，我们需要设置`disabled`参数为`true`，既然是需要弹出选择框，`field`组件右边应该要有一个实心向下的
三角形图标，配置为`right-icon`为`arrow-down-fill`，同时监听`click`即可。这一切，uView都帮你想到，并且做好了。  



```html
<template>
	<view class="">
		<u-cell-group>
			<u-field @click="showAction" v-model="sex" 
			:disabled="true" label="性别" placeholder="请选择性别"
			right-icon="arrow-down-fill"
			>
			</u-field>
		</u-cell-group>
		<u-action-sheet @click="clickItem" :itemList="sexList" :show="show" @close="show = false"></u-action-sheet>
	</view>
</template>

<script>
export default {
	data() {
		return {
			sex: '',
			sexList: [
				{
					text: '男',
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			show: false
		};
	},
	methods: {
		showAction() {
			this.show = true;
		},
		clickItem(index) {
			this.sex = this.sexList[index].text;
		}
	}
};
</script>
```


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| type | 输入框的类型 | String  | text | textarea |
| icon | `label`左边的图标，限uView的图标名称 | String | - | - |
| right-icon | 输入框右边的 | Boolean  | false | true |
| required | 是否必填，左边你显示红色"*"号 | Boolean  | false | true |
| label | 输入框左边的文字提示 | String  | - | - |
| password | 是否密码输入方式(用点替换文字)，`type`为`text`是有效 | Boolean  | false | true |
| clearable | 是否显示右侧清空内容的图标控件 | Boolean  | true | false |
| lable-width | `lable`的宽度，单位rpx | Number \| String | 130 | - |
| label-align | `label`的文字对齐方式 | String  | left | center / right |
| input-align | 输入框内容对齐方式 | String | left | center / right |
| icon-color | 左边通过`icon`配置的图标的颜色 | String  | #606266 | - |
| auto-height | 是否自动增高输入区域，`type`为`textarea`时有效 | Boolean | true | false |
| error-message | 显示的错误提示内容 | String  | - | - |
| placeholder | 输入框的提示文字 | String | - | - |
| placeholder-style | `placeholder`的样式(内联样式，字符串)，如"color: #ddd" | String | - | - |
| focus | 是否自动获得焦点 | Boolean | false | true |
| fixed | 如果`type`为`textarea`，且在一个"position:fixed"的区域，需要指明为`true` | Boolean | false | true |
| disabled | 是否不可输入 | Boolean | false | true |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | Number | 140 | - |
| confirm-type | 设置键盘右下角按钮的文字，仅在type="text"时生效 | String | done | - |


### CellItem Slot

| 名称          | 说明            |
|-------------  |---------------- |
| left | 自定义左侧标题部分的内容  |
| icon | 自定义左侧的图标 |
| right | 自定义右侧内容 |


### CellItem Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| input | 输入框内容发生变化时触发 | value：输入框的内容，建议通过`v-model`双向绑定输入值，而不是监听此事件的形式 | - |
| focus | 输入框获得焦点时触发 | - | - |
| blur | 输入框失去焦点时触发 | - | - |
| confirm | 点击完成按钮时触发 | value：输入框的内容，建议通过`v-model`双向绑定输入值，而不是监听此事件的形式 | - |
| right-icon-click | 通过`right-icon`生成的图标被点击时触发 | - | - |
| click | 输入框被点击或者通过`right-icon`生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出"picker"等操作时的场景，点击倒三角图标，理应发出此事件，见上方说明| - | - |
