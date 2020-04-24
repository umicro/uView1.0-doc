## Upload 上传

<demo-model url="/pages/componentsB/upload/index"></demo-model>


该组件用于上传图片场景

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 可以通过设置`file-list`参数(数组，元素为对象)，显示预置的图片。其中元素的`url`属性为图片路径
- 设置`action`参数为后端服务器地址，注意H5在浏览器可能会有跨域限制，让后端允许域即可

```html
<template>
	<u-upload :action="action" :file-list="fileList" ></u-upload>
</template>

<script>
	export default {
		data() {
			// 演示地址，请勿直接使用
			action: 'http://www.example.com/upload',
			fileList: [
				{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				}
			]
		}
	}
</script>
```

### 手动上传

组件默认为自动上传，可以设置`auto-upload`为`false`，然后通过`ref`调用组件的`upload`方法，手动上传图片

```html
<template>
	<view>
		<u-upload ref="uUpload" :action="action" :auto-upload="false" ></u-upload>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			// 非真实地址
			action: 'http://www.example.com/upload',
		},
		methods: {
			submit() {
				this.$refs.uUpload.upload();
			},
		}
	}
</script>
```

### 获取上传的图片列表

图片选择或者上传成功后，会保存在组件内部的`lists`数组中，数组元素为对象，有如下属性：
- url: 图片地址
- error：组件内部使用，不应根据此值判断上传是否成功，而应根据`progress`属性
- progress：如果值为100，表示图片上传成功
- response：上传成功后，服务器返回的数据，这是最有用的了

为了获得上传的文件列表，应该监听`on-uploaded`，此事件表示现有的文件队列已经上传完毕(包括自动和手动上传)

```html
<template>
	<view>
		<u-upload ref="uUpload" @on-uploaded="onUploaded" :action="action" :auto-upload="false" ></u-upload>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			action: 'http://www.example.com/upload',
			filesArr: []
		},
		methods: {
			submit() {
				this.$refs.uUpload.upload();
			},
			onUploaded(lists) {
				this.filesArr = lists;
			}
		}
	}
</script>
```

### 报错提示

在以下几种情况，组件会默认通过toast提示用户信息，可以把`show-tips`设置为`false`取消默认的提示，这时可以通过API
中的各种事件，进行自定义的个性化提示
- 超出允许的最大上传数量
- 图片大小超出最大允许大小
- 上传图片出错
- 移除图片

以下示例为屏蔽组件内部的提示，在移除图片时，监听`onRemove`事件，手动提示的情况

```html
<template>
	<u-upload ref="uUpload" :action="action" :show-tips="false" @on-remove="onRemove"></u-upload>
</template>

<script>
	export default {
		data() {
			action: 'http://www.example.com/upload',
		},
		methods: {
			onRemove(index, lists) {
				console.log('图片已被移除')
			},
		}
	}
</script>
```

### 限制图片数量和大小

- 通过`max-count`可以设置最多可以选择的图片的数量
- 通过`max-size`设置单张图片最大的大小，单位为B(byte)，默认不限制

下方示例为单张最大为5M，最多选择6张的情况：

```html
<u-upload :max-size="5 * 1024 * 1024" max-count="6"></u-upload>
```

### 自定义相关说明

1. 组件内部样式  
组件默认选取图片会展示预览缩略图，包括默认的选取图片的按钮，他们的宽高都是`200rpx`，`border-radius`值为`10rpx`，
另外预览图片的盒子有一个默认的边框，值为`border: 1px solid rgb(235, 236, 238)`。如果用户需要自定义上传按钮，可以参考这些值。

2. 自定义上传按钮  
通过传递名为`addBtn`的`slot`，同时配置`custom-btn`为`true`，可以自定义想要的上传按钮。

如下所示：

```html
<u-upload :custom-btn="true">
	<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
		<u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon>
	</view>
</u-upload>

<style>
.slot-btn {
	width: 329rpx;
	height: 140rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(244, 245, 246);
	border-radius: 10rpx;
}

.slot-btn__hover {
	background-color: rgb(235, 236, 238);
}
</style>
```

3. 自定义预览列表
首先需要设置`show-upload-list`为`false`来去除组件内部的默认预览列表，其次需要通过`ref`获取组件，进而
操作组件内部的变量和方法，下面为一些组件内部的方法和变量说明：
- `lists`(变量)，可以通过此值，构建自定义的预览列表，该变量内部如下：

```js
lists = [
	{
		url: 'xxx.png', // 预览图片的地址
		error: false, // 上传失败，此值为true
		progress: 100, // 0-100之间的值
	},
	......
]
```

- `deleteItem(index)`(方法)，可以用此方法在自定义列表中通过`ref`删除某一张图片

以下为完整的自定义图片预览列表示例：

```html
<template>
	<view class="wrap">
		<view class="pre-box" v-if="!showUploadList">
			<view class="pre-item" v-for="(item, index) in uUpload.lists" :key="index">
				<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
				<view class="u-delete-icon" @tap.stop="uUpload.deleteItem(index)">
					<u-icon name="close" size="20" color="#ffffff"></u-icon>
				</view>
				<u-line-progress v-if="item.progress > 0 && !item.error" :show-percent="false" height="16" class="u-progress"
				 :percent="item.progress"></u-line-progress>
			</view>
		</view>
		<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action"> 
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon>
			</view>
		</u-upload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: 'http://192.168.100.17/index.php/index/index/upload', // 演示地址
				showUploadList: false, 
				uUpload: {}, // 组件实例
			}
		},
		// 只有onReady生命周期才能调用refs操作组件
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.uUpload = this.$refs.uUpload;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.wrap {
		padding: 24rpx;
	}
	
	.slot-btn {
		width: 341rpx;
		height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}

	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}

	.pre-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.pre-item {
		flex: 0 0 48.5%;
		border-radius: 10rpx;
		height: 140rpx;
		overflow: hidden;
		position: relative;
		margin-bottom: 20rpx;
	}

	.u-progress {
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}

	.pre-item-image {
		width: 100%;
		height: 140rpx;
	}

	.u-delete-icon {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 10;
		background-color: $u-type-error;
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

```


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| action | 服务器上传地址  | String | - | - |
| max-count | 最大选择图片的数量 | String \| Number | 99 | - |
| width | 图片预览区域和添加图片按钮的宽度(高等于宽)，单位rpx，不能是百分比，或者`auto` | String \| Number | 200 | - |
| custom-btn | 如果需要自定义选择图片的按钮，设置为`true` | Boolean | false | true |
| show-progress | 是否显示进度条 | Boolean  | true | false |
| disabled | 是否启用(显示/移仓)组件 | Boolean  | false | true |
| image-mode | 预览图片等显示模式，可选值为uni的image的`mode`属性值 | String  | aspectFill | - |
| header | 上传携带的头信息，对象形式 | Object | {} | - |
| form-data | 上传额外携带的参数 | Object | {} | - |
| name | 上传文件的字段名，供后端获取使用 | String  | file | - |
| size-type | original 原图，compressed 压缩图，默认二者都有 | Array\<String\>  | ['original', 'compressed'] | - |
| source-type | 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有 | Array\<String\>  | ['album', 'camera'] | - |
| preview-full-image | 是否可以通过`uni.previewImage`预览已选择的图片 | Boolean  | true | false |
| multiple | 是否开启图片多选，部分安卓机型不支持  | Boolean  | true | false |
| deletable | 是否显示删除图片的按钮 | Boolean  | true | false |
| max-size | 选择单个文件的最大大小，单位B(byte)，默认不限制 | String \| Number  | Number.MAX_VALUE | - |
| file-list | 默认显示的图片列表，数组元素为对象，必须提供`url`属性 | Array\<Object\>  | - | - |
| upload-text | 选择图片按钮的提示文字 | Boolean  | 选择图片 | - |
| auto-upload | 选择完图片是否自动上传，见上方说明 | Boolean  | true | false |
| show-tips | 特殊情况下是否自动提示toast，见上方说明 | Boolean  | true | false |
| show-upload-list | 是否显示组件内部的图片预览 | Boolean  | true | false |


### Methods

此方法如要通过ref手动调用

| 名称          | 说明            |
|-------------  |---------------- |
| upload | 调用此方法，手动上传图片  |


### Slot

|名称|说明|版本|
|:-|:-|:-|
| addBtn | 自定义的选择图片按钮 |  - |



### Events

回调参数中的`lists`参数，为目前组件内的所有图片数组，`index`为当前操作的图片的索引

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| on-oversize | 图片大小超出最大允许大小 | (file, lists) |
| on-preview | 全屏预览图片时触发 | (url, lists)，url为当前选中的图片地址 |
| on-remove | 移除图片时触发 | (index, lists) |
| on-success | 图片上传成功时触发 | (data, index, lists)，data为服务器返回的数据 |
| on-change | 图片上传后，无论成功或者失败都会触发 | (res, index, lists)，res为服务器返回的信息 |
| on-error | 图片上传失败时触发 | (res, index, lists)，res为服务器返回的信息 |
| on-progress | 图片上传过程中的进度变化过程触发 | (res, index, lists)，res为服务器返回的信息，具体参数请打印查看 |
| on-uploaded | 所有图片上传完毕触发 | (lists)，可以通过此事件，将lists参数获取，提交给后端使用 |
| on-choose-complete | 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表 | (lists)，内部当前的文件列表 |


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=events] + p + table thead tr th:nth-child(3){
	width: 45%;
}
</style>