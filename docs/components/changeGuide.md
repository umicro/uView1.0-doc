## 升级指南

<demo-model url="/"></demo-model>

### 1.1.4升级指导(2020-04-29)

由于本次更新，加入基础类[内置样式](/components/common.html)，需要作出一些调整(修改两行代码)，原因如下：

1. 内置样式如果放在uni.scss文件中，在微信小程序上，由于编译机制的问题，会同时被打包
到全局样式文件和单独的每个页面样式文件中，可能造成分包、整包变大而无法预览或者发布。故uView对此样式进行了分拆，将基础样式类放到uView库的`index.scss`中，由于目前uni-app的V3版本不支持在main.js中引入，
故需要在App.vue中引入，不会导致被打包到每个单独的页面样式文件中。
2. 由于uni-app的机制，对于SCSS的变量，只能在uni.scss中引入才生效，故uView将主题样式变量相关的部分，放到了uView库的`theme.scss`文件中。

具体操作如下：

- 在`App.vue`中**首行**的位置，增加如下一行`import "@/uview/index.scss"`：

:::danger 注意：
1. 必须要将标签加入`lang="scss"`属性以支持SCSS，否则会出错！
2. 请将将引入的代码，写在`styel`标签的首行。
:::

```css
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uview/index.scss";
	
	/* ......其他的样式 */
</style>
```

- 在项目根目录的`uni.scss`中，删除原来的`@import '@/uview/theme.scss';`一行，改成如下：

```js
// 删除原来的这一行
// @import '@/uview/index.scss';

// 加入这一行
@import '@/uview/theme.scss';
```