## Tabs 标签
该组件内部实现主要依托于uniapp的`scroll-view`和`swiper`组件，主要特色是切换过程中，tabs文字的颜色可以渐变，底部滑块可以
跟随式滑动，活动tab滚动居中等。应用场景可以用于需要左右切换页面，比如商城的订单中心(待收货-待付款-待评价-已退货)等应用场景。

::: warning 注意
此组件目前为uView的`vue`版本，非`nvue`版本(制作中)，内部使用uniapp的`swiper`组件为基础，`swiper`是单页组件，
适合做简单列表左右滑动，因为性能问题，用swiper做复杂长列表，需要较高的优化技巧以及接受一些限制。如果要实现类似腾讯新闻APP首页可以左右
滑动复杂的多个tab切换，不建议使用本组件，如果使用，请自行测试列表很长时的切换流畅度。后续uView会对`nvue`进行兼容，增强此组件在APP上的能力。  
官方有一个简单又"复杂"的`nvue`新闻模板示例，注意：该示例没有滚动居中，颜色渐变，滑块跟随等效果。具体参考：  
[插件市场新闻模板示例](https://ext.dcloud.net.cn/plugin?id=103)
:::

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过设置`is-scroll`(默认为`true`)，配置tabs组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为false，5个标签以上，建议可以左右拖动。
具体的标签，通过`tabs`参数配置，该参数要求为数组，元素为对象，对象要有`name`属性，见示例：

```html
<u-tabs ref="tabs" :tabs="tabs" :is-scrool="false"></u-tabs>

<script>
	export default {
		data() {
			return {
				tabs: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价'
				}],
			}
		}
	}
</script>
```

### 控制底部滑块的样式

1. 可以通过`active-color`控制颜色(同时为当前活动tab文字颜色和滑块的颜色)。
2. `bar-width`控制滑块的长度(rpx)。
3. `bar-height`控制滑块高度。

```html
<u-tabs ref="tabs" :tabs="tabs" bar-height="6" bar-width="40" active-color="#2979ff"></u-tabs>
```

### 控制tabs组件的活动tab样式

1. 通过`active-color`和`un-active-color`控制tabs的激活和非激活颜色。
2. `font-size`为tabs文字大小。
3. `current`为初始化tabs的激活tab索引，默认为0。`gutter`为单个tab标签的左右内边距之和，即左右各占`gutter`的一半。
```html
<u-tabs ref="tabs" :tabs="tabs" active-color="#2979ff" un-active-color="#606266" font-size="30" current="0"></u-tabs>
```

### 使用案例
一般可以搭配uniapp的`swiper`组件实现左右滑动，同时搭配uView的`loadmore`实现底部加载更多的功能，注意：
- 必须要给组件设置`ref`属性，因为结合uni的`swiper`组件时需要调用tabs内部的方法，详见示例。   
- 本示例中在`swiper-item`中嵌套了`可选`的uniapp的`scroll-view`组件，uni官方不建议在APP-vue和小程序中`scroll-view`中使用map、video等原生组件，
具体请参考：[uni的scroll-view组件文档](https://uniapp.dcloud.io/component/scroll-view)    

注意：由于tabs组件需要结合uni的`swiper`组件使用，过程较为复杂，故此示例代码仅作参考使用，请勿直接复制粘贴使用，
具体使用方法请下载查阅uView的tabs案例。

```html
<template>
	<view>
		<view>
			<u-tabs ref="uTabs" :tabs="tabs" :current="current" @change="tabsChange" :isScrool="false"
			 swiperWidth="750"></u-tabs>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
					...
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uTabs from '@/uview/components/tabs/index.vue';
	export default {
		components: {
			uTabs
		},
		data() {
			return {
				tabs: [{
					name: '十年'
				}, {
					name: '青春'
				}, {
					name: '之约'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				dx: 0, // 切换过程中，百度小程序不支持此值
			};
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	};
</script>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| is-scroll | tabs是否可以左右拖动  | Boolean | true | false |
| tabs | 标签数组，元素为对象，如[{name: '推荐'}] | Array  | - | - |
| current | 制定哪个tab为激活状态 | String \| Number  | 0，即tabs的第一项 | - |
| height | 导航栏的高度，单位rpx | String \| Number  | 80 | - |
| font-size | tab文字大小，单位rpx | String \| Number  | 30 | - |
| swiper-width | tabs组件外部swiper的宽度，默认为屏幕宽度，单位rpx | string \| Number  | 750 | - |
| active-color | 滑块和激活tab文字的颜色  | String | #2979ff | - |
| un-active-color | tabs文字颜色 | String  | #303133 | - |
| bar-width | 滑块宽度，单位rpx | String \| Number  | 40 | - |
| bar-height | 滑块高度，单位rpx | String \| Number  | 6 | - |
| gutter | 单个tab标签的左右内边距之和，单位rpx | String \| Number  | 40 | - |
| bg-color | tabs导航栏的背景颜色 | string  | #ffffff | - |

### Events

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
|change|点击标签时触发|index: 点击了第几个tab，索引从0开始|-|
