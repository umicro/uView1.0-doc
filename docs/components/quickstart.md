## 快速上手


### 引入

以下说明，主要针对[安装](/guide/quickstart.html)中的`方式一`  
下载uView，解压得到名为`uview`的文件夹，放到项目根目录，进行如下简单配置即可使用：

::: warning 注意
uView依赖SCSS，相信您的项目在HBuilder X中已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，
如不生效，重启HX即可。
:::

#### 1. 引入uView主JS库

在项目根目录中的`main.js`中，引入并使用uView的JS库，注意这两行要放在`import Vue`之后。

注：或许您想知道`Vue.use`的作用是什么，见[简要介绍Vue.use的原理](/components/vueUse.html)

```js
import Vue from 'vue'
......

// 就这两行即可
import uView from "@/uview";
Vue.use(uView);

......
const app = new Vue({
	...App
})
app.$mount();
```


#### 2. 引入uView的全局SCSS文件

uView组件本身不依赖全局css样式实现，各样式都写在自身组件内，实现最大程度的解耦，但是为了统一的主题，以及日后的扩展，
目前一些跟颜色相关的scss变量定义在全局变量中，这些变量有独特的命名(`u-`开头)，不会与您的类名冲突。 
 
uView的样式文件中类名没有使用类似`.box .item {...}`的嵌套形式，是为了向后兼容nvue做准备(nvue不支持类名嵌套)。  
在项目根目录下的`uni.scss`的首行引入即可(如果没有此文件，创建即可)。

```css
@import '@/uview/index.scss';

<--! 其他内容 -->
......
```


#### 3. 配置easycom组件模式

easycom功能可以让用户无需安装、引用、注册，三个步骤后才能使用组件，详见[easycom文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)

Hbuilder X自2.5.1版开始正式支持`easycom`特性，HX2.5.5版支持自动引入`components/组件名称/组件名称.vue`，考虑到用户的一些自定义组件
都会放在`components`目录中，为了不和用户的自定义组件混淆，同时也是为了能让用户一键升级uView，所以我们把uView相关的所有内容都放在了根目录的
`uview`文件夹中。

为了能使用`easycom`特性，在项目根目录下的`pages.json`前面引入如下配置即可：

```json
"easycom": {
	"u-(.*)": "@/uview/components/u-$1/u-$1.vue"
},

// 其他配置
"pages": [
	......
]
```

### 如何使用

由于上面第三步通过`easycom`规则自动引入了组件，在某个页面可以直接使用组件，无需通过`import`引入组件。

```html
<template>
	<u-action-sheet :itemList="itemList" :show="show"></u-action-sheet>
</template>

<script>
	export default {
		data() {
			itemList: [{
				text: '点赞',
				color: 'blue',
				fontSize: 28
			}, {
				text: '分享'
			}, {
				text: '评论'
			}],
			show: true
		}
	}
</script>
```

<br>

::: warning 注意
此`easycom`功能需要Hbuilder X 2.5.1版本及以上，如果HX低于此版本，要使用某个组件，需要通过手动`import`引入
:::

```html
<template>
	<u-action-sheet :itemList="itemList" :show="show"></u-action-sheet>
</template>

<script>
	import uActionSheet from "@/uView/components/u-action-sheet.vue";
	components: {
		uActionSheet
	},
	export default {
		data() {
			itemList: [{
				text: '点赞',
				color: 'blue',
				fontSize: 28
			}, {
				text: '分享'
			}, {
				text: '评论'
			}],
			show: true
		}
	}
</script>
```