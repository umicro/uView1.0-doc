## Picker 选择器

此选择器有两种弹出模式

1. 一是时间模式，可以配置年，日，月，时，分，秒参数
2. 二是地区模式，可以配置省，市，区参数

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`mode`参数设置为`time`或者`region`，区分时间和地区模式
- 通过`show`参数为`true`或`false`值，打开或者收起picker

:::warning 注意
由于props单向传值的限制，您需要在`picker`组件的`close`事件回调中把`show`值设置为`false`，否则
下次您将无法唤起`picker`
:::

```html
<template>
	<u-picker :show="show" mode="time" @close="picker = false;"></u-picker>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>
```

### 设置默认时间或地区

- 如果`mode`为`time`，可以通过`default-time`参数设置打开时的默认时间，格式如"2025-07-02 13:01:00"、"2025-07-02 13:01"
- 如果`mode`为`region`，可以通过`default-region`(Array格式)中文的省市区名称，如：["河北省", "秦皇岛市", "北戴河区"]，或者代号的
省市区，如：["13", "1303", "130304"]。

注意：这些省市区的名称和代码，须是uView自身提供的，否则可能无法匹配

```html
<template>
	<u-picker mode="time"  default-time="2025-07-02 13:01"></u-picker>
	
	<u-picker mode="region"  :area-code='["13", "1303", "130304"]'></u-picker>
</template>
```

### 设置需要显示的参数

- 时间模式时：通过`params`参数传入一个对象给组件，给需要的参数属性置为`true`，可选的参数有：`year`、`month`、`day`、`hour`、`minute`、`second`。
其中，`second`值默认为`false`，其他值默认为`true`
- 地区模式时：可选的参数有：`province`、`city`、`area`，默认都为`true`

下方示例时间模式，只会显示年，月，日可选

```html
<template>
	<u-picker mode="time" :params="params"></u-picker>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				}
			}
		}
	}
</script>
```

### 回调参数

当点击picker的"取消"或者"确定"按钮时，会分别产生回调事假`cancel`和`confirm`，这两个事件的同时，会
触发一个`close`事件，是为了更方便的获取组件的值。
回调的参数为一个对象，值为传递给`picker`组件的`params`参数的属性一致  
注意：`mode`为`region`时，回调对象属性为一个对象，分别有`label`和`value`属性，见如下说明：

```js
// parmas默认值：
let params = {
	year: true,
	month: true,
	day: true,
	hour: false,
	minute: false,
	second: false,
	province: true,
	city: true,
	area: true
}


// 如果params值如下：
let params = {
	year: true,
	month: true,
	day: true,
	hour: false,
	minute: false,
	second: false
}

// 那么回调的参数可能如下：
{
	year: '2020',
	month: '05',
	day: '10'
}


// 如果params值如下(地区选择模式)：
let params = {
	province: true,
	city: true,
	area: true
}

// 那么回调的参数可能如下：
{
	area: {
		label: "宝安区",
		value: "440306"
	},
	city: {
		label: "深圳市",
		value: "4403"
	},
	province: {
		label: "广东省",
		value: "44"
	},
}
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| params | 需要显示的参数，见上方说明  | Object | - | - |
| mode | 模式选择，region-地区类型，time-时间类型  | String	 | time | region |
| start-year | 开始的年份，mode=time时有效 | String \| Number | 1950 | - |
| end-year | 结束的年份，mode=time时有效 | String \| Number | 2050 | - |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/guide/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |
| cancel-color | 取消按钮的颜色  | String | #606266 | - |
| confirm-color | 确认按钮的颜色  | String | #2979ff | - | 6
| default-time | 默认选中的时间，mode=time时有效  | String | - | - |
| default-region | 默认选中的地区，中文形式，mode=region时有效  | String | - | - |
| default-code | 默认选中的地区，编号形式，mode=region时有效  | String | - | - |
| mask-close-able | 是否允许通过点击遮罩关闭Picker  | Boolean | true | false |


### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| confirm | 点击确定按钮，返回当前选择的值 | Object: 见上方"回调参数"部分说明 | - |
| cancel | 点击确定按钮，返回当前选择的值 | Object: 见上方"回调参数"部分说明 | - |
| close | cancel和confirm事件的同时，会触发close事件 | Object: 见上方"回调参数"部分说明 | - |
