## noticeBar 滚动通知

该组件用于滚动通告场景，有多种模式可供选择

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`text`数组参数设置需要滚动的内容
- 滚动`mode`参数有两种模式，分别是`horizontal`水平滚动，`vertical`垂直滚动。其中水平滚动又可以通过`is-circular`来配置是衔接滚动(`true`)还是步进滚动(`false`)，
- 衔接滚动滚动会把`text`数组元素拼接成一个字符串形式进行滚动，具体效果请见实例

```html
<template>
	<view>
		<u-notice-bar mode="horizontal" :text="list"></u-notice-bar>
		
		<u-notice-bar mode="horizontal" :is-circular="false" :text="list"></u-notice-bar>
		
		<u-notice-bar mode="vertical" :text="list"></u-notice-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				]
			}
		}
	}
</script>
```

### 配置主题

- 通过`type`参数可以配置5种主题，即`primary`、`warning`(默认)、`error`、`info`、`success`

```html
<u-notice-bar type="error" :text="list"></u-notice-bar>
```

### 配置图标

- `volume-icon`参数配置是否显示左侧的音量小喇叭图标，默认显示
- `more-icon`配置是否显示右侧的向右箭头，默认关闭
- `close-icon`配置是否显示关闭的图标，默认关闭

```html
<u-notice-bar :volume-icon="false" :text="list"></u-notice-bar>

<u-notice-bar :more-icon="true" :text="list"></u-notice-bar>

<u-notice-bar :close-icon="true" :text="list"></u-notice-bar>
```

### 配置滚动速度

- `mode`为`vertical`(垂直滚动)，或者`mode`为`horizontal`且`is-circular`为`false`时，两者都可视为"步进"滚动，此时通过`duration`设置滚动周期时长
- `mode`为`horizontal`且`is-circular`为`true`时，可视为"水平衔接滚动"，此时uView加入了一个滚动因子参数，可确保在任意多内容情况下，滚动速度恒定不变，
可通过`speed`参数配置每秒滚动的距离，单位为`rpx`

```html
<u-notice-bar :mode="vertical" :duration="1500" :text="list"></u-notice-bar>

<u-notice-bar :mode="vertical" :is-circular="false" :duration="1500" :text="list"></u-notice-bar>

<u-notice-bar :mode="vertical" :is-circular="true" :speed="200"  :text="list"></u-notice-bar>
```

### 控制滚动的开始和暂停

- `autoplay`参数默认为`true`，控制是否自动播放滚动
- `play-state`参数为`paused`，滚动会暂停，为`play`滚动继续播放

```html
<u-notice-bar :autoplay="true" play-state="paused" :text="list"></u-notice-bar>
```

### 事件回调

- 每当输入内容发生改变，会回调一个`change`事件，内容为当前输入的字符串，如"395"
- 当输入的内容长度(字符个数)达到`max-length`值后，会触发`finish`事件，同时也会触发`change`事件

```html
<template>
	<view>
		<u-message-input @change="change" @finish="finish"></u-message-input>
	</view>
</template>

<script>
	export default {
		methods: {
			change(e) {
				console.log('内容改变，当前值为：' + e);
			},
			finish(e) {
				console.log('输入结束，当前值为：' + e);
			},
		}
	}
</script>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| max-length | 输入字符个数 | String \| Number | 4 | - |
| dot-fill | 是否用圆点填充  | Boolean | false | true |
| mode | 模式选择，见上方"基本使用"说明 | String | box | bottomLine / middleLine |
| value | 预置值 | String \| Number | - | - |
| breathe | 是否开启呼吸效果，见上方说明 | Boolean | true | false |
| focus | 是否自动获取焦点 | Boolean | false | true |
| bold | 字体和输入横线是否加粗 | Boolean | true | false |
| font-size | 字体大小，单位rpx | String \| Number | 60 | - |
| active-color | 当前激活输入框的样式 | String | #2979ff | - |
| focus | 非激活输入框的样式，文字颜色同此值 | String | #606266 | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 输入内容发生改变时触发，具体见上方说明 | value：当前输入的值 | - |
| finish | 输入字符个数达`max-length`值时触发，见上方说明 | value：当前输入的值 | - |

