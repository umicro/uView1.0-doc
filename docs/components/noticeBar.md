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

- `more-icon`参数为`true`时，点击向右图标会回调一个`getMore`事件
- `close-icon`参数为`true`时，点击关闭箭头图标会触发一个`close`事件
- 点击通告栏的文字时，会触发`click`事件，回调参数为当前文字所在`text`数组参数的索引值


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| text | 滚动内容，数组形式 | Array | - | - |
| type | 显示的主题  | String | warning | primary / info / error / success |
| volume-icon | 是否显示小喇叭图标 | Boolean | true | false |
| more-icon | 是否显示右边的向右箭头 | Boolean | false | true |
| close-icon | 是否显示关闭图标 | Boolean | false | true |
| autoplay | 是否自动播放 | Boolean | true | false |
| color | 文字颜色 | String | - | - |
| bg-color | 背景颜色 | String \| Number | 60 | - |
| mode | 滚动模式 | String | horizontal(水平滚动) | vertical(垂直滚动) |
| show | 是否显示 | Boolean | true | false |
| font-size | 字体大小，单位rpx | String \| Number | 28 | - |
| duration | 滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms | String \| Number | 2000 | - |
| speed | 水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接方式有效，单位rpx | String \| Number | 160 | - |
| font-size | 字体大小，单位rpx | String \| Number | 28 | - |
| is-circular | `mode`为`horizontal`时，指明是否水平衔接滚动 | Boolean | true | false |
| play-state | 播放状态，`paly`-播放，`paused`-暂停 | String | paly | paused |

### Events

详细解释见上方说明

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| click | 点击通告文字触发 | index：当前文字所在`text`数组的索引值 | - |
| close | 点击右侧关闭图标触发 | - | - |
| getMore | 点击右侧向右图标触发 | - | - |
