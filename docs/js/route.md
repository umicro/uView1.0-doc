## route 路由跳转

#### route(Object)

此为一个路由跳转方法，内部为uni对多个路由跳转api的封装，更方便使用

Object参数说明：

| 参数名      |     类型       |      默认值      |   是否必填      |  说明   |
|-------------  |---------------- |---------------|------------------ |-------- |
| type | String  | navigateTo | false | `navigateTo`对应`uni.navigateTo`，`redirect`对应`uni.redirectTo`，`switchTab`对应`uni.switchTab`，`reLaunch`对应`uni.reLaunch`，`navigateBack`对应`uni.navigateBack`|
| url | String  | -	 | false | `type`为`navigateTo`，`redirect`，`switchTab`，`reLaunch`时为必填 |
| tips | String | Object  | 1 | `type`为`navigateBack`时用到，表示返回的页面数 |
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