## Tabbar 底部导航栏 <Badge text="1.4.8" type="tip"/>

<demo-model url="/pages/componentsB/tabbar/index"></demo-model>

#### 优点：

此组件一般用于应用的底部导航，具有如下特点：
- 可以设置凸起的按钮，且是全端通用的
- 图标可以使用字体图标(内置图标和扩展图标)或者图片
- 可以动态切换菜单的数量以及配置
- 切换菜单之前，可以进行回调鉴权
- 可以设置角标
- 有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域


#### 缺点：

虽然优点很多，但是此组件依然是瑜不掩瑕的，而且我们不建议使用，除非在某些特殊场景 不得已而为之，因为它同样带来很多难以解决的缺点：
- 首先是性能问题，在uni-app的vue版本上，自定义tabbar让您不得不在一个webview内模拟出多个页面，这存在严重的性能问题
- 相比原生的uni-app的tabbar，自定义tabbar让你失去了路由管理的功能
- 渲染的速度比不上原生的tabbar，但是这影响不大


:::warning 注意：
选择了自定义tabbar，意味着您默认接受了它糟糕的性能。所以当您觉得最终的结果差强人意时，我们也无能为力，我们并非系铃人。
:::


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|


### 基本使用

在使用的时候，需要注意组件的位置，要将它放在和页面包裹所有内容的元素同级的位置，否则可能会造成组件的高度塌陷，有如下几个需要注意的点：

- 通过`list`参数配置每一个item的参数
- 如果需要配置凸起的按钮，这个按钮的配置需要在`list`数组的**中间位置**，同时需要配置`mid-button`参数为`true`
- 将组件放在和页面包裹所有内容的元素同级的位置
- 通过`v-model`绑定一个数值变量，用于指示当前激活项的索引

下面解释`list`数组中元素参数的作用：

```js
let list = [
	{
		// 非凸起按钮未激活的图标，可以是uView内置图标名或自定义扩展图标库的图标
		// 或者png图标的【绝对路径】，建议尺寸为80px * 80px
		// 如果是中间凸起的按钮，只能使用图片，且建议为120px * 120px的png图片
		iconPath: "home",
		// 激活(选中)的图标，同上
		selectedIconPath: "home-fill",
		// 显示的提示文字
		text: '首页',
		// 红色角标显示的数字，如果需要移除角标，配置此参数为0即可
		count: 2,
		// 如果配置此值为true，那么角标将会以红点的形式显示
		isDot: true,
		// 如果使用自定义扩展的图标库字体，需配置此值为true
		// 自定义字体图标库教程：https://www.uviewui.com/guide/customIcon.html
		customIcon: false,
		// 如果是凸起按钮项，需配置此值为true
		midButton: false
	}
]
```

#### 示例代码

```html
<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0
			}
		},
	}
</script>
```


### 外观配置

可以通过以下参数，进行组件的整体外观配置

- `height`配置导航栏高度，建议使用默认值即可，默认为`50px`，与uni-app自带系统导航栏高度一致
- `bg-color`组件的背景颜色
- `active-color`与`inactive-color`配置提示文字和图标的颜色(如果是字体图标的话)，可以搭配`bg-color`达到自定义导航栏主题的效果


### 切换前的回调

在点击切换之前，如果配置了`before-switch`参数并绑定的是一个方法的话，将会抛出点击项的索引，并执行此方法。  

此回调可以返回一个`promise`、`true`，或者`false`，下面分别阐述三者的处理情况：

- `false`——如果返回`false`，将不会切换`tab`项
- `true`——如果返回`true`，将会切换`tab`项
- `promise`——如果返回的是一个`promise`，如果进入`then`回调，就会和返回`true`的情况一样，如果进入`catch`回调，就会和返回`false`的情况一样

下面举例说明：

由于篇幅问题，以下示例可不直接运行，仅作举例作用。

#### 1. 普通返回

```html
<template>
	<u-tabbar :before-switch="beforeSwitch"></u-tabbar>
</template>

<script>
	export default {
		methods: {
			beforeSwitch(index) {
				// 只能切换偶数项
				if(index % 2 == 0) return true;
				else return false;
			}
		}
	}
</script>
```

#### 2. 请求之后再返回

```html
<template>
	<u-tabbar :before-switch="beforeSwitch"></u-tabbar>
</template>

<script>
	export default {
		methods: {
			async beforeSwitch(index) {
				// await等待一个请求，请求回来后再返回true，再进行切换
				let data = await this.$u.post('url');
				return true; // 或者根据逻辑返回false
			}
		}
	}
</script>
```

#### 3. 返回一个Promise

```html
<template>
	<u-tabbar :before-switch="beforeSwitch"></u-tabbar>
</template>

<script>
	export default {
		methods: {
			beforeSwitch(index) {
				// 返回一个promise
				return new Promise((resolve, reject) => {
					this.$u.post('url').then(res => {
						// resolve()之后，将会进入promise的组件内部的then回调，相当于返回true
						resolve();
					}).catch(err => {
						// reject()之后，将会进入promise的组件内部的catch回调，相当于返回false
						reject();
					})
				})
			}
		}
	}
</script>
```


### 边框

组件默认带了顶部边框，如果有配置中部凸起按钮的话，此按钮同时也会有外层边框，如果不需要，配置`border-top`为`false`即可。



### API

### Table Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 各项的配置参数，见顶部说明，数组形式 | Array  | - | - |
| show | 是否显示组件 | Boolean | true | false |
| v-model | 双向绑定的激活项的索引值 | String \| Number | 0 | - |
| bg-color | 组件的背景颜色 | String  | #ffffff | - |
| height | 高度，单位任意，数值则为rpx单位，不建议修改 | String \| Number  | 50px | - |
| icon-size | 非中部凸起图标的大小，单位任意，数值则为rpx单位 | String \| Number  | 40 | - |
| mid-button-size | 凸起的图标的大小，单位任意，数值则为rpx单位 | String \| Number  | 90 | - |
| active-color | 文字和字体图标激活时的颜色 | String  | #303133 | - |
| inactive-color | 文字和字体图标未激活时的颜色 | String  | #606266 | - |
| mid-button | 是否需要中部凸起的按钮，配置了此值，依然需要配置`list`参数中需凸起项的`midButton`为`true`，见上方说明 | Boolean  | false | true |
| before-switch | 切换之前的回调钩子，见上方说明 | Function  | - | - |
| border-top | 是否显示顶部的边框 | Boolean | true | false |


### Events

| 事件名 | 说明 | 回调参数 |
| :- | :- | :- |
| change | 切换选项时触发 | index：当前要切换项的索引 |



<style scoped>
h3[id=table-props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=td-props] + table thead tr th:nth-child(2){
	width: 43%;
}

h3[id=th-props] + table thead tr th:nth-child(2){
	width: 43%;
}
</style>