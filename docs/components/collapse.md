## Collapse 折叠面板

通过折叠面板收纳内容区域

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

默认为手风琴模式，即打开一个，另外所有的都会关闭。可以将`u-collapse`的`accordion`设置为`false`，这样可以允许打开多个面板

```html
<template>
	<u-collapse>
		<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
			{{item.body}}
		</u-collapse-item>
	</u-collapse>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					enable: false
				},{
					head: "生活中不是缺少美，而是缺少发现美的眼睛",
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					open: false,
				},{
					head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
					open: false,
				}],
			}
		}
	}
</script>
```

### 控制面板的初始状态，以及是否可以操作

- 设置`u-collapse-item`的`open`参数为`true`，可以让面板初始化时为打开状态
- 如果设置`u-collapse-item`的`enable`参数为`false`，那么面板会保持初始状态，无法关闭或打开

```html
<template>
	<u-collapse>
		<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index" :open="item.open" :enable="item.enable">
			{{item.body}}
		</u-collapse-item>
	</u-collapse>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					enable: false
				},{
					head: "生活中不是缺少美，而是缺少发现美的眼睛",
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					open: false,
				},{
					head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
					open: false,
				}],
			}
		}
	}
</script>
```

### API

### Collapse Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| accordion | 是否手风琴模式  | Boolean | true | false |

### Collapse Item Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| title | 面板标题  | String | - | - |
| head-bg-color | 标题的背景颜色  | String | #ffffff | - |
| body-bg-color | 主体内容的背景颜色  | String | #ffffff | - |
| enable | 面板是否可以打开或收起  | Boolean | true | false |
| arrow | 是否显示标题右侧的箭头  | Boolean | true | false |
| arrow-color | 标题右侧箭头的颜色 | String | #909399 | - |
| open | 设置某个面板的初始状态是否打开  | Boolean | false | true |
| name | 唯一标识符，如不设置，默认用当前`collapse-item`的索引值 | String \/ Number | - | - |


### Collapse Event

注意：请在`<u-collapse></u-collapse>`上监听此事件

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| change | 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array) | activeNames: String / Array | - |