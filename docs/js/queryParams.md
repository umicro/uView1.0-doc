## queryParams 对象转URL参数

该方法，可以将一个对象形式参数转换成`get`传参所需参数形式，如把`{name: 'lisa', age: 20}`转换成`?name=lisa&age=20`  
用途：可以用于`uni.navigateTo`接口传参等场景，无需自己手动拼接`URL`参数

#### queryParams(data, isPrefix = true)

该函数可以将一个Hex的十六进制颜色值转换成一个RGB颜色值

- `data` <Object\> 对象值，如`{name: 'lisa', age: 20}`  
- `isPrefix` <Boolean\> 是否在返回的字符串前加上"?"，默认为`true`

```js
export default {
	data() {
		return {
			data: {
				name: 'lisa',
				age: 20
			}
		}
	},
	onLoad() {
		console.log(this.$u.queryParams(this.data));
		// 结果为：?name=lisa&age=20
	}
}
```