## route 路由跳转

#### route(Object)

此为一个路由跳转方法，内部为uni对多个路由跳转api的封装，更方便使用

Object参数说明：

| 参数名      |     类型       |      默认值      |   是否必填      |  说明   |
|-------------  |---------------- |---------------|------------------ |-------- |
| type | String  | navigateTo | false | `navigateTo`或`to`对应`uni.navigateTo`，`redirect`或`redirectTo`对应`uni.redirectTo`，`switchTab`或`tab`对应`uni.switchTab`，`reLaunch`对应`uni.reLaunch`，`navigateBack`或`back`对应`uni.navigateBack`|
| url | String  | -	 | false | `type`为`navigateTo`，`redirectTo`，`switchTab`，`reLaunch`时为必填 |
| delta | String | Object  | 1 | `type`为`navigateBack`时用到，表示返回的页面数 |
| params | Object | -  | false | 传递的对象形式的参数，如{name: 'lisa', age: 18} |
| animationType | String | pop-in  | false | 只在APP生效，详见[窗口动画](https://uniapp.dcloud.io/api/router?id=animation) |
| animationDuration | Number | 300  | false | 动画持续时间，单位ms |


<br>

```js
export default{
	onLoad() {
		setTimeout(() => {
			this.$u.rute({
				url: 'pages/components/empty/index',
				params: {
					name: 'lisa'
				}
			})
		}, 2000)
	}
}
```


### 简写

注：为了方便简写和调用，可以直接传递一个`url`地址替代`Object`，它只能执行`uni.navigateTo`类型的地址，不支持跳转到Tab页面

```js
this.$u.rute('/pages/components/empty/index');
```