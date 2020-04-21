## 安装

<demo-model url="/"></demo-model>


:::danger 说明
uView已正式发布**公测版**，欢迎[交流反馈](/cooperation/about.html)，如有问题，我们会紧急修复。
:::

:::tip 说明
由于uView使用`easycom`模式，让您无需引入组件即可直接使用，但是此功能需要Hbuilder X 2.5.5及以上版本才支持，详见[配置easycom组件模式](/components/quickstart.html#_3-配置easycom组件模式)。
`easycom`打包的时候是按需引入的，您可以放心引入uViw的整个组件库，打包的时候只会引入您使用了的组件。
:::


### 下载

#### 方式一

这个方式，适用于已有现成uni-app项目的情形，解压后将`uview`文件夹，复制到项目根目录，再根据[快速上手](/components/quickstart.html)
中的配置进行引用即可。

**注意：** 此下载方式必须要按照[快速上手](/components/quickstart.html)中的说明配置了才可用。

<br>
<div @click="downloadPost(2)" class="download-link">
	下载地址：<a href="https://download.uviewui.com/uView_1.0.8.rar">uView_1.0.8.rar</a>
</div>
<br>
<br>


#### 方式二

此方式为一个完整的uni-app示例工程(使用Hbuilder X创建，非[vue-cli](https://uniapp.dcloud.io/quickstart?id=_2-%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)模式创建)，
它适用于新启动的项目，其中已包含了uView核心，并且做好了所有配置，让您无需任何配置，开箱即用。


**说明：**

- 此方式，依然需要Hbuilder X已安装`sass/scss编译`插件
- 此示例工程，默认开启V3编译器配置，以及自定义组件模式
- 如果运行出现问题，可能是您的HX版本太低，请升级至最新稳定版尝试解决

<br>
<div @click="downloadPost(1)" class="download-link">
	下载地址：<a href="https://download.uviewui.com/uView_demo_1.0.8.rar">uView_demo_1.0.8.rar</a>
</div>
<br>
<br>


#### 方式三

此方式为整个uView演示项目，里面有uView核心，以及演示所需的一些文件和资源，建议用户可以下载
此项目运行用于查看UI演示效果，或者通过里面的示例和文档，可以快速掌握某一个组件的用法。

<br>
<div @click="downloadPost(3)" class="download-link">
	下载地址：<a href="https://download.uviewui.com/uView_1.0.8_full.rar">uView_1.0.8_full.rar</a>
</div>
<br>
<br>

<br>

:::tip 注意
方式三不适用于直接开发中，它只是演示用的，可以直接运行并查看效果。
:::

<br>
<br>

### 版本查询

有两种方式可以查询到正在使用的uView的版本：  

- 通过`console.log`打印的形式

```js
console.log(this.$u.config.v);

// 或者(二者等价)
console.log(this.$u.config.version);
```


- 通过源码查看的形式

可以查阅uView的配置文件得知当前版本号，具体位置为"/uview/libs/config/config.js"。


<script>
import axios from "axios";
export default {
	data() {
		return {
			
		}
	},
	methods: {
		downloadPost(type) {
			console.log(this.$themeConfig.baseUrl)
			let url = this.$themeConfig.baseUrl + '/index/index/download';
			axios.post(url, {
			    type: type,
			})
			.then(function (response) {
			    // console.log(response);
			})
			.catch(function (error) {
			   // console.log(error);
			});
		}
	}
}
</script>


<style scoped>
.download-link {
	font-size: 14px;
	color: #5e6d82;
}
</style>