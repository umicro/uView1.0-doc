## Layout 布局

通过基础的 12 分栏，迅速简便地创建布局  

::: warning 注意
如需实现类似宫格的布局，请使用uView的`grid`[宫格组件](/components/grid.html)，可以设置角标，功能更完善和灵活
:::

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`col`组件的`span`设置需要分栏的比例

```html
<template>
	<view class="wrap">
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout bg-purple">
				</view>
			</u-col>
			<u-col span="4">
				<view class="demo-layout bg-purple-light">
				</view>
			</u-col>
			<u-col span="5">
				<view class="demo-layout bg-purple-dark">
				</view>
			</u-col>
		</u-row>
		<u-row gutter="16" justify="space-between">
			<u-col span="3">
				<view class="demo-layout bg-purple">
				</view>
			</u-col>
			<u-col span="9">
				<view class="demo-layout bg-purple-light">
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<style scoped lang="scss">
	.wrap {
		padding: 24upx;
	}

	.u-row {
		margin: 40upx 0;
	}

	.demo-layout {
		height: 80upx;
		border-radius: 8upx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>
```

### 分栏间隔

- 通过`row`组件的设置`gutter`参数，来指定每一栏之间的间隔(左边内边距各为gutter/2)，默认间隔为0

```html
<u-row gutter="16">
	<u-col span="3">
		<view class="demo-layout bg-purple">
		</view>
	</u-col>
	<u-col span="9">
		<view class="demo-layout bg-purple-light">
		</view>
	</u-col>
</u-row>
```

### 分栏偏移

通过制定`col`组件的`offset`属性可以指定分栏偏移的栏数

```html
<u-row gutter="16">
	<u-col span="3">
		<view class="demo-layout bg-purple">
		</view>
	</u-col>
	<u-col span="3" offset="6">
		<view class="demo-layout bg-purple-light">
		</view>
	</u-col>
</u-row>
```

### 对齐方式

通过`row`组件的`justify`来对分栏进行灵活的对齐，
可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)

```html
<u-row gutter="16" justify="center">
	<u-col span="3">
		<view class="demo-layout bg-purple">
		</view>
	</u-col>
	<u-col span="3">
		<view class="demo-layout bg-purple-light">
		</view>
	</u-col>
</u-row>
```

### API

### Row Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| gutter | 栅格间隔，左右各为此值的一半  | String \| Number | 0 | - |
| justify | 水平排列方式  | String | start(或flex-start) | end(或flex-end) / center / around(或space-around) / between(或space-between) |
| align | 垂直排列方式 | String | center | top / bottom |

### Col Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| span | 栅格占据的列数，总12等分  | String \| Number | 0 | 1-12 |
| offset | 栅格左侧的间隔格数  | String \| Number | 0 | - |

