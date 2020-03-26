## 全局变量的实现方式

我们这里说的全局变量，着重指的是能够**全局动态响应**的情况

说到全局变量，我们首先想到的可能就是`vuex`，确实，这是最好的实现方式。在uniapp平台，我们还可以有其他的实现方式，这里我们做一个抛砖引玉的讨论，当然，我们
推荐的，还是使用uView封装后的`vuex`的实现方式，它具有配置简单，使用方便的特点。  

整体来说，在uniapp平台，可以有如下实现全局变量的方式：

1. 本地存储
2. 配置文件
3. 挂载Vue.prototype
4. globalData
5. Vuex

下面分别对这几个实现方式进行讲解，由于1到4点由于各种原因，与我们要讨论的**全局动态响应**不是很切合，实现起来也较简单，所以不着重讨论。


### 本地存储

这是一种持久存储的方式，类似于`web`中的`Local Storage`，当我们需要将一个变量保存很长一段时间，比如用户的登录状态(Token)，才会使用这种方式，
同时，频繁对这种方式进行存和取，是有性能消耗的，应用生命周期(应用从启动到关闭)内使用的变量，不应该使用此方式操作。

此种存储方式，有同步和异步之分

- 同步的意思是，下一步的操作要等获取存储的内容之后才能进行，一般获取变量的时候，都使用此种方式。

```js
// 同步存储
uni.setStorageSync('key', 'value');

// 同步获取
let key = uni.getStorageSync('key');
// 这一句要等从本地存储中获取了key之后，才执行
let val = 1; 
```

- 异步的意思是，执行取或存的过程中，先执行后面的代码，在回调中得到存储的结果

```js
// 异步存储
uni.setStorage({
    key: 'key',
    data: 'value',
    success: function () {
        // 存储成功的回调
    }
});
// 下面这行会比存储成功的回调先执行
let val = 1;


// 异步获取
uni.getStorage({
    key: 'key',
    success: function (res) {
        // 获取成功的回调
    }
});
// 下面这行会比获取成功的回调先执行
let val = 1; 
```


### 配置文件

配置文件，顾名思义，就是把一些变量写入到`js`文件中，再通过`export default`的形式导出，一般什么情况会使用这种方式呢，是我们要从用户尚未开始安装
APP之前，直到用户卸载APP，都需要存在的这样一些变量或者配置。比如我们可以把向后端请求的域名写到配置文件中，其他情况不适用这种存储变量的方式。

```js
// config.js，根目录的common文件夹中
export default {
	domain: 'http://39.99.140.15',
}
```

需要使用的时候，我们通过`import`引入即可，这种方式，缺点是每次都需要引入文件，我们无法将挂载在到Vue.prototype上

```js
import config from "./uview/libs/config/config.js"

export default {
	onLoad() {
		console.log(config.domain);
	}
}
```

如果我们试图在`main.js`中将从`config.js`中获取的值挂载到Vue.prototype，再在页面通过`this.xxx`形式获取，在APP和H5有效，
但在**微信小程序**中是无效的。

```js
// main.js
import config from "./uview/libs/config/config.js"

Vue.prototype.config = config.domain;
```

```js
// demo.vue
export default {
	onLoad() {
		// 微信小程序中值为undefined，其他端有效，HX版本：2.6.5稳定版
		console.log(this.config)
	}
}
```


### 挂载到Vue.prototype

使用挂载到Vue.prototype的方式，都是需要在根目录的`main.js`中进行的，在页面中，我们可以使用`this.xxx`的形式获取变量，除了上面说的微信小程序
中无效外(Hbuilder X 2.6.5稳定版)。

具体使用，见上方的`配置文件`中的介绍



### globalData

这个方式，最早是微信小程序特有的，它无法使用`vuex`进行全局状态的管理，就造了这么一个方式，当然，globalData也不是动态响应的，也就是说，你在`A.vue`修改了
globalData中的某个值`username`，在`B.vue`中对这个值的引用是无法自动更新的，`vuex`却是可以做到的。

由上，因为无法自动更新，为了做到这一点，所以我们需要在页面的`onShow`生命周期中获取globalData的值，或许你会问，为什么一定是`onShow`呢，`onLoad`不行吗？
`onLoad`获取值是没问题的，但是当我们从`A.vue`进入`B.vue`中(假设A和B页面都通过globalData引用了某个`userName`)，在`B.vue`中修改了globalData的
`userName`，当我们返回`A.vue`页面时，`onLoad`不会再次触发，但是`onShow`就如它的字面意思，是会再次触发的，所以我们需要把对globalData的获取放在`onShow`生命周期。

下面为使用globalData的示范：

1. 对globalData的定义，需要在App.vue中进行

```js
// App.vue
export default {
	globalData: {
		userName: '白居易'
	},
	// 这里需要注意的是，如果我们需要在App.vue中使用userName
	// 使用getApp().globalData.userName是不行，因为此时getApp()尚未生成
	// 需要通过this.$scope.globalData获取
	onLaunch() {
		console.log(this.$scope.globalData.userName);
	}
}
```

2. 