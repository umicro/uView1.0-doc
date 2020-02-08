## 路由跳转

#### navigate(Object)

此为一个路由跳转方法，内部为uni对多个路由跳转api的封装，更方便使用，该方法的另一个别名为`rute`

Object参数说明：

| 参数名      |     类型       |      默认值      |   是否必填      |  说明   |
|-------------  |---------------- |---------------|------------------ |-------- |
| type | String  | Boolean | false | true |
| item-list | 按钮的文字数组，见上方文档示例  | Array\<Object\>	 | [ ] | - |
| tips | 顶部的提示文字，见上方文档示例 | Object  | - | - |
| cancel-btn | 是否显示底部的取消按钮 | Boolean  | true | false |
| mask-close-able | 点击遮罩是否可以关闭 | Boolean  | true | false |
| safe-area-inset-bottom | 是否开启[底部安全区适配](/guide/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean  | false | true |


```js
export default{
	data() {
		return {
			array: [1,2,3,4,5]
		}
	},
	onLoad() {
		console.log(this.$u.randomArray(this.array));
	}
}
```