## Upload 上传

该组件用于上传图片场景

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 可以通过设置`file-list`参数(数组，元素为对象)，显示预置的图片。其中元素的`url`属性为图片路径路径
- 设置`action`参数为后端服务器地址，注意H5可能会有跨域限制，后端取允许域即可

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

组件默认为自动上传，可以设置`auto-upload`为false，然后通过ref调用组件的`upload`方法，手动上传图片

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

图片选择或者上传成功后，会保存在组件内部的`lists`数组中，元素为对象，有如下属性：
- src: 图片地址
- error：组件内部使用，不应根据此值判断上传是否成功，而应根据`progress`属性
- progress：如果值为100，表示图片上传成功
- response：上传成功后，服务器返回的数据，这是最有用的了

为了获得上传的文件列表，应该监听`on-uploaded`，此事件表示文件已经上传完毕(包括自动和手动上传)

```html
<template>
	<view>
		<u-upload ref="uUpload" on-uploaded="onUploaded" :action="action" :auto-upload="false" ></u-upload>
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

```html
<template>
	<u-upload ref="uUpload" :action="action" :show-tips="false" @onRemove="onRemove"></u-upload>
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

```html
<u-upload :max-size="5 * 1024 * 1024" max-count="6"></u-upload>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| action | 服务器上传地址  | String | - | - |
| max-count | 最大选择图片的数量 | String \| Number | 52 | - |
| show-progress | 是否显示进度条 | Boolean  | true | false |
| enable | 是否启用组件 | Boolean  | true | false |
| image-mode | 预览图片等显示模式，可选值为uni的image的`mode`属性值 | String  | aspectFill | - |
| header | 上传携带的头信息，对象形式 | Object | {} | - |
| form-data | 上传额外携带的参数 | Object | {} | - |
| name | 上传文件的字段名，供后端获取使用 | String  | file | - |
| size-type | original 原图，compressed 压缩图，默认二者都有 | Array\<String\>  | ['original', 'compressed'] | - |
| source-type | album 从相册选图，camera 使用相机，默认二者都有 | Array\<String\>  | ['album', 'camera'] | - |
| preview-full-image | 是否可以通过`uni.previewImage`预览已选择的图片 | Boolean  | true | false |
| multiple | 是否开启图片多选，部分安卓机型不支持  | Boolean  | true | false |
| deletable | 是否显示删除图片的按钮 | Boolean  | true | false |
| max-size | 选择单个文件的最大大小，单位B(byte)，默认不限制 | String \| Number  | Number.MAX_VALUE | - |
| file-list | 默认显示的图片列表，数组元素为对象，必须提供`src`属性 | Array\<Object\>  | - | - |
| upload-text | 选择图片按钮的提示文字 | Boolean  | 选择图片 | - |
| auto-upload | 选择完图片是否自动上传，见上方说明 | Boolean  | true | false |
| show-tips | 特殊情况下是否自动提示toast，见上方说明 | Boolean  | true | false |


### Methods

此方法如要通过ref手动调用
| 名称          | 说明            |
|-------------  |---------------- |
| upload | 调用此方法，手动上传图片  |


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
