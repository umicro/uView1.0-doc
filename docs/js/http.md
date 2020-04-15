## Http请求

<demo-model url="/pages/library/http/index"></demo-model>


该插件适用于一般的请求场景，只有`post`和`get`请求，目前不适用于其他的请求形式，比如上传，下载等。插件定位为
小而美，而不是大而全，目标是切合实际，开箱即用。  

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

#### get | post(url, params, header).then(res => {}).catch(res => {})

- `url` <String\> 请求的URL，可以完整的URL(http开头)，或者是路径的一部分，这时会自动拼接上`baseUrl`(一般为api的域名部分)
- `params` <Object\> 请求的参数，对象形式，如"{name: 'lisa', age: 23}"，该参数是可选的
- `header` <Object\> 请求的header，对象形式，如果token等字段，建议通过配置写入，该参数是可选的

`get`和`post`都挂载在`$u`对象下，其中`get`和`post`使用方法完全一致，只是一个为`this.$u.get`，一个为`this.$u.post`,使用如下：  

一般来说，只在`then`中接收返回值即可，`catch`无特殊情况，无需编写和理会，因为如果服务端返回的不是200状态，插件内部会弹出model提示

```html
<script>
	export default {
		onLoad() {
			// 不带header
			this.$u.post('http://www.example.com', {
				id: 3,
				menu: 1
			}).then(res => {
				console.log(res);
			});
			
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('http://www.example.com', {}, {
				token: 'xyz'
			}).then(res => {
				console.log(res);
			});
		}
	}
</script>
```

### 配置参数

配置参数的时候，需要调用`this.$u.http.setConfig()`方法，传递一个对象作为参数。
- 强烈建议在此配置统一请求的`baseUrl`
- 同时看情况是否开启(默认关闭)请求加载中的loading，该功能需要设置一个时间(默认800ms)，如果超过此时间，请求尚未返回，则显示一个loading，直至返回后，取消loading。   


说明：请求loading超时时间的意义为，一般情况下，请求会在几十毫秒返回，时间极短，无需loading，如果显示loading，会导致
动画一闪而过，体验不好。如果用户网络慢，或者服务器堵塞，可能一个请求需要几秒钟，这时请求达到设定时间(800ms)，
就会显示loading，几秒钟后请求返回，loading消失。

以下为可选的配置参数，建议在App.vue的onLaunch生命周期中配置，**这个配置是一次配置，全局通用的**。

```js
config = 
{
	baseUrl: '', // 请求的本域名
	// 默认的请求头
	header: {
		'content-type': 'application/json;charset=UTF-8'
	},
	method: 'POST',
	// 设置为json，返回后会对数据进行一次JSON.parse()
	dataType: 'json',
	showLoading: true, // 是否显示请求中的loading
	loadingText: '请求中...', // 请求loading中的文字提示
	loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
	originalData: false, // 是否在拦截器中返回服务端的原始数据
}
```

具体写法，建议在根目录App.vue的onLaunch生命周期中(一次配置，全局通用)：

```js
export default {
	onLaunch() {
		this.$u.http.setConfig({
			baseUrl: 'https://api.example.com',
			header: {
				'content-type': 'application/json;charset=UTF-8'
			},
			loadingText: '努力加载中~',
			// ......
		});
	}
}
```


### 请求拦截和响应拦截(如配置，每次请求都会执行)

**此两个拦截，是可选配置的**

1. 何谓请求拦截？  

顾名思义，就是在请求发出之前，对请求做一些额外处理，比如对不同api接口，携带不同的`header`参数，或者(也是最重要)
配置统一的token到`header`中，这样就不用每次请求，都写token相关的部分到`this.$u.post()`的第三个请求头参数中，
建议此配置，写在项目根目录App.vue的onLaunch生命周期中，在上一步“配置参数”的后边，如下：

#### this.$u.http.interceptor.request = (config) => { ... }

- `config` <Object\> 此`config`参数，带有header和url属性，header属性是为了添加请求头信息，url属性是为了对某些url进行特别处理

一般建议对此进行token的配置，说明：**由于本拦截是每次请求都会调用的，如果在此写入token到header中，即使再次您重新登录，token发生变化，也无需再次调用本拦截**

```js
export default {
	onLaunch() {
		// 配置参数
		this.$u.http.setConfig({
			// ......
		});
		
		// 请求拦截部分，如配置，每次请求前都会执行
		this.$u.http.interceptor.request = (config) => {
			// 这里假设token放在globalData中
			config.header.Token = getApp().globalData.token;
			// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
			if(config.url == '/user/login') config.header.noToken = true;
			// 最后需要将config进行return
			return config;
			// 如果return一个false值，则会取消本次请求
			// if(config.url == '/user/rest') return false; // 取消某次请求
		}
	}
}

// login.vue中，执行操作登录
export default {
	methods: {
		login() {
			this.$u.post('/user/login', {
				username: '李商隐',
				password: 'gierrLi'
			}).then(res => {
				// 这里假设token放在globalData中
				getApp().globalData.token = res.token;
			})
		}
	}
}
```

2. 何谓响应拦截？  
	
响应拦截，意味着是在请求返回时，对返回的数据进行一些处理，如不同的状态对应的关系，比如约定状态码200为成功，
则把返回数据返回到`this.$u.post().then()`的`then`中，如果为201(约定为token失效，需要登录)，则可以在在拦截中进行toast
提示，并跳转到登录页。 
该拦截，建议写在项目根目录的App.vue的onLaunch生命周期中，如下：

:::tip 注意
响应拦截器中默认返回的是`response.data`，如果您的需求比较特殊，需要返回`response`，请在"this.$u.http.setConfig"配置
`originalData`为`true`，如果配置了，服务端返回的"response.statusCode"不为"200"的时候，将不会自动弹出"modal"框，请自行
在响应拦截器中配置相关行为。
:::

#### this.$u.http.interceptor.response = (res) => { ... }

- `res` <Object\> 该参数为服务器返回的数据，具体可打印查看

```js
export default {
	onLaunch() {
		// 配置参数
		this.$u.http.setConfig({
			// ......
		});
		
		// 请求拦截部分，如配置，每次请求前都会执行本方法
		this.$u.http.interceptor.request = (config) => {
			// ......
			return config;
		}
		
		// 响应拦截，如配置，每次请求结束都会执行本方法
		this.$u.http.interceptor.response = (res) => {
			if(res.code == 200) {
				// res为服务端返回值，可能有code，result等字段
				// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
				// 如果配置了originalData为true，请留意这里的返回值
		 		return res.result;
			} else if(res.code == 201) {
				// 假设201为token失效，这里跳转登录
				uni.showToast({
					title: '验证失败，请重新登录',
					icon: 'none'
				})
				setTimeout(() => {
					// 此为uView的方法，详见路由相关文档
					this.$u.route({
						url: '/pages/user/login'
					})
				}, 1500)
				return false;
			} else {
				// 如果返回false，则会调用Promise的reject回调，
				// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
				return false;
			}
		}
	}
}
```


### 如何使用await进行同步操作

- 有时候我们需要同步的写法，即下一步的结果依赖于上一步的请求返回结果，当然我们可以把下一步的写法，放入请求的`then`回调中，
但这是不直观的，比如我们需要打印请求的返回结果，可以这样做：

```js
export default {
	methods: {
		login() {
			// 正确，但是需要在回调中打印
			this.$u.post('/user/login').then(res => {
				console.log(res);
			})
			
			// 错误，如果想要使用同步的形式，无需then回调
			let result = this.$u.post('/user/login').then(res => {
				console.log(res);
			})
			console.log(result);
			
			// 错误，无需then回调是对的，但是ret会为undefined，因为登录是一个异步过程(可能需要几十毫秒)
			// 下一行打印的时候，请求还没返回，所以ret会为undefined
			let ret = this.$u.post('/user/login');
			console.log(ret);
		}
	}
}
```

上面演示了错误的示例，如果下一步需要依赖上一步的返回结果，并且需要需要同步的写法，我们可以结合"async/await"，
如不理解这个写法，可直接使用，或者搜索相关知识。  
说明：我们在某个地方使用`await`，意味着调用的函数本身或者生命周期，必须要加上`async`前缀，否则出错  

此为在onLoad生命周期中的请求示例：

```js
export default {
	// 可以放心在生命周期前加上async，不会导致问题
	async onLoad() {
		let ret = await this.$u.post('/user/login');
		// 此处在函数体外写了async，并且使用了await等待返回，所以可以打印ret结果
		// 意味着这里的console.log是等待了几十毫秒请求返回后才执行的
		console.log(ret);
	}
}
```

此为在methods方法中的请求示例：  

```js
export default {
	methods: {
		async login() {
			let ret = await this.$u.post('/user/login');
			// 此处在函数体外写了async，并且使用了await等待返回，所以可以打印ret结果
			// 意味着这里的console.log是等待了几十毫秒请求返回后才执行的
			console.log(ret);
		}
	}
}
```

:::warning 注意
如果需要同时进行多个请求，有开启loading效果的话，必须要await进行处理，否则loading不会关闭，
但一个页面有多个请求，如果不同时进行的无需处理
:::

这里同时进行多个请求，又开启了loading效果的话，loading不会关闭，需要async/await处理

```js
export default {
	methods: {
		user() {
			this.$u.post('/user/login').then(res => {
				// .....
			})
			this.$u.post('/user/info').then(res => {
				// .....
			})
		}
	}
}
```

同时多个请求，又在配置中开启了loading效果的正确做法

```js
export default {
	methods: {
		async user() {
			await this.$u.post('/user/login').then(res => {
				// .....
			})
			await this.$u.post('/user/info').then(res => {
				// .....
			})
		}
	}
}
```

### 完整示例

如果您不想阅读上方的内容的，或者觉得繁琐，下面给出一个完整的示例，复制修改某些提示的值即可直接使用

```js
// App.vue
export default {
	onLaunch() {
		// 配置参数
		this.$u.http.setConfig({
			// 修改此处baseUrl
			baseUrl: 'https://api.example.com'
		});
		
		// 请求拦截部分
		this.$u.http.interceptor.request = (config) => {
			// 修改此处，添加header的认证
			config.header.Token = getApp().globalData.token;
			return config;
		}
		
		// 响应拦截
		this.$u.http.interceptor.response = (res) => {
			// 修改此处，判断状态码，和返回最终想要得到的数据
			if(res.code == 200) {
		 		return res.result;
			} else {
				return false;
			}
		}
	}
}
```

```js
// login.vue
export default {
	methods: {
		// post示例
		sumbitByPost() {
			this.$u.post('/user/login', {
				username: 'lisa',
				password: '123456'
			}).then(res => {
				// res为服务端返回的数据
			})
		},
		
		// get示例
		sumbitByGet() {
			this.$u.get('/user/login', {
				username: 'lisa',
				password: '123456'
			}).then(res => {
				// res为服务端返回的数据
			})
		},
	}
}
```