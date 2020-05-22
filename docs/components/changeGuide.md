## 升级指南

本专题不是每次更新版本的时候都会写入内容，只有某些需要特殊留意和处理的版本升级时，才会在这里写入相关的升级指导，如果您想看看uView近来
都有哪些升级记录，请移步：[更新日志](/components/changelog.html)

<demo-model url="/"></demo-model>

### 1.2.8升级指导(2020-05-22)

本次升级，对`Waterfall`瀑布流组件进行升级，新增了可以清空和移除瀑布流列表数据的组件内部方法，需要通过`ref`调用，因为组件内部无法直接修改父组件的数据，
所以需要您手动将原来的`flow-list`参数改为`v-model`双向绑定父组件的数据，内部才可以修改父组件的瀑布流数组数据。

<br>
<br>

### 1.1.9升级指导(2020-05-06)

本次升级，对swipeAction组件进行了修改，可以配置多个按钮，原本通过`btn-text`和`btn-bg-color`配置按钮的文字和背景颜色，本次升级，加入`options`
参数(数组)，可以配置多个按钮，详见[SwipeAction 滑动操作](/components/swipeAction.html)的基本说明，另外，点击的回调事件中，返回了两个
参数，一个为Props传递的`index`参数，另一个`options`按钮参数的索引。

<br>
<br>

### 1.1.7升级指导(2020-05-05)

本次升级，迎来了uView的一个跨越发展，uView正式支持npm方式安装，借助此方式，您不用每次都下载覆盖升级，仅执行`npm update uview-ui`即可，
由于uView在npm的包名为`uview-ui`，引入时需写上`import uView from "uview-ui"`，旧版中下载方式安装时uView的文件夹为`uview`，为了规范和统一，
在此`1.1.7`版本后，uView将以前根目录的`uview`文件夹，改名为`uview-ui`，其他保持不变。  

对此您有两个选择：
1. uView下载解压后得到`uview-ui`文件夹，您可以将其改名为`uview`，从而覆盖原有的同名库(如果这不是您第一次下载的话)，这样您无需在`pages.json`、`main.js`、`uni.scss`、`App.vue`做出路径名称的变更(但是我们不推荐这样做)
2. 如果您是在进行下载方式的升级，删掉(或备份)原来的`uview`文件夹，将`uview-ui`文件夹放到根目录，然后根据[下载安装方式配置](/components/downloadSetting.html)说明对`pages.json`、`main.js`、`uni.scss`、`App.vue`做出细微修改。(推荐此方式，一劳永逸)

<br>
<br>

### 1.1.4升级指导(2020-04-29)

由于本次更新，加入基础类[内置样式](/components/common.html)，需要作出一些调整(修改两行代码)，原因如下：

1. 内置样式如果放在uni.scss文件中，在微信小程序上，由于编译机制的问题，会同时被打包
到全局样式文件和单独的每个页面样式文件中，可能造成分包、整包变大而无法预览或者发布。故uView对此样式进行了分拆，将基础样式类放到uView库的`index.scss`中，由于目前uni-app的V3版本不支持在main.js中引入，
故需要在App.vue中引入，不会导致被打包到每个单独的页面样式文件中。
2. 由于uni-app的机制，对于SCSS的变量，只能在uni.scss中引入才生效，故uView将主题样式变量相关的部分，放到了uView库的`theme.scss`文件中。

具体操作如下：

- 在`App.vue`中**首行**的位置，增加如下一行`import "@/uview-ui/index.scss"`：

:::danger 注意：
1. 必须要将标签加入`lang="scss"`属性以支持SCSS，否则会出错！
2. 请将将引入的代码，写在`style`标签的首行。
:::

```css
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uview-ui/index.scss";
	
	/* ......其他的样式 */
</style>
```

- 在项目根目录的`uni.scss`中，删除原来的`@import '@/uview-ui/theme.scss';`一行，改成如下：

```js
// 删除原来的这一行
// @import '@/uview-ui/index.scss';

// 加入这一行
@import '@/uview-ui/theme.scss';
```