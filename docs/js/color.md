## color 颜色值

此功能为uView内部通过js提供的一些颜色值，可以用于通过js修改元素字体，背景颜色等一些场景，常用于uView的各个组件中。  
这些颜色值，挂载在`$u`对象下的`color`数组中，关于这些颜色值的具体描述，请见组件部分[Color色彩](/components/color.html)  
使用方法：如使用`primary`颜色值，方法为：`$u.color['primary']`


### 主题颜色

该主题颜色值，一共有5个，分别是`primary`、`error`、`success`、`info`、`warning`

```js
export default{
	onLoad() {
		console.log(this.$u.color['error']);
	}
}
```


### 文字颜色

uView一共提供了四个颜色值，具体请见组件部分[Color色彩](/components/color.html)  
分别有：`mainColor`、`contentColor`、`tipsColor`、`lightColor`、`borderColor`(边框颜色值)

```js
export default{
	onLoad() {
		console.log(this.$u.color['contentColor']);
	}
}
```
