## 快速上手

<demo-model url="/"></demo-model>



### 引入

以下说明，主要针对[安装](/guide/quickstart.html)中的`方式一`  
下载uView，解压得到名为`uview`的文件夹，放到项目根目录，进行如下简单配置即可使用：

::: warning 注意
uView依赖SCSS，相信您的项目在HBuilder X中已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，
如不生效，重启HX即可。
:::

### 关于easycom的说明

uView采用easycom自动按需引入组件的方式，这意味着即使您引入了整个uView组件库，只用到了其中一个组件，最终打包的时候，只有被引用了的这个组件才会被打包编译，
其余的组件不会被打包，也就是说不会造成打包后体积变大或者性能下降的问题，请放心引入整个uView核心库。

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

:::danger 警告
这里是要在项目根目录下的`uni.scss`中引入，而非根目录的`App.vue`中引入，uniapp不会解析`App.vue`中的通过文件引入的`scss`变量，所以会导致报错！
:::

```css
@import '@/uview/index.scss';

<--! 其他内容 -->
......
```


#### 3. 配置easycom组件模式

easycom功能可以让用户无需安装、引用、注册，三个步骤后才能使用组件，详见[easycom文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)

Hbuilder X自2.5.1版开始正式支持`easycom`特性，**HX2.5.5**版支持自动引入`components/组件名称/组件名称.vue`，考虑到用户的一些自定义组件
都会放在`components`目录中，为了不和用户的自定义组件混淆，同时也是为了能让用户一键升级uView，所以我们把uView相关的所有内容都放在了根目录的
`uview`文件夹中。

为了能使用`easycom`特性，在项目根目录下的`pages.json`前面引入如下配置即可：

```json
// pages.json

{
	// 此为需要加入的内容
	"easycom": {
		"^u-(.*)": "@/uview/components/u-$1/u-$1.vue"
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```


### 如何使用

由于上面第三步通过`easycom`规则自动引入了组件，在某个页面可以直接使用组件，无需通过`import`引入组件。

```html
<template>
	<u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
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
	}
</script>
```

<br>


### 如何不使用easycom而单独引用某一个组件

某些情况下，您可能不想通过easycom引用组件(虽然我们极力推荐您使用easycom)，那么您可以使用`import`这个常规的引入方式，如下：

```html
<template>
	<u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>

<script>
	import uActionSheet from "@/uView/components/u-action-sheet/u-action-sheet.vue";
	export default {
		components: {
			uActionSheet
		},
		data() {
			return {
				list: [{
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
	}
</script>
```

<br>

### 关于uView组件的esaycom规则可能和其他组件引入名称冲突的问题

uView的组件引入是通过easycom形式的，写在pages.json中，以`u-`开头，这可能和其他UI组件，或者uniapp插件市场的[uParse修复版-html富文本加载](https://ext.dcloud.net.cn/plugin?id=364)组件名冲突而**报错**，
原因是此`uParse`的组件引用名为`u-parse`，也是`u-`开头，即使您在页面中显式地配置了组件引入，但uniapp依然认为easycom配置的规则优先级比页面引入的组件规则高。

以下为`uParse`第三方插件的官方写法：

```html
<template>
    <u-parse :content="xxx"></u-parse>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		 components: {
			uParse
		 }
	}
</script>
```

可以看到，上方虽然通过`import`声明了此组件，最终引用的组件名称为`<u-parse>`("u-"开头)，但是uniapp依然忽视了，而认为uView在`pages.json`配置的easycom规则的优先级更高，因而去uView的组件库
中查找`u-parse`，因为找不到而报错，这是不合理的。

解决办法也很简单，给冲突的插件换一个名字即可，比如上面的`uParse`插件，我们在`import`和`components`声明的时候换一个名字即可，比如这里让其为字母`a`开头：

```html
<template>
    <a-parse :content="xxx"></a-parse>
</template>

<script>
	// 记得同时修改引入的名称，以及components中的名称
	import aParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		 components: {
			aParse
		 }
	}
</script>
```