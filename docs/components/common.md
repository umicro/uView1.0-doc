## 内置样式

<demo-model url="/"></demo-model>


#### 说明

uView组件功能的实现，并不依赖全局样式，内置的一些类名，只是提供一些基础且常用的样式，仅此而已。  
注意：请根据[快速上手](/components/quickstart.html)中的说明，引入uView提供的scss文件。

:::warning 温馨提示
由于uView的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的`style`标签加上`lang="scss"`属性，否则可能会报错。  
另外，您可能需要留意，如果页面的`style`标签加入了`lang="scss"`属性，就必须要在`style`标签中写入内容，哪怕是无用的样式也好，否则HX不会解析scss，此非uView的问题。
:::

#### 文字省略

`u-line-1`,`u-line-2`,`u-line-3`三个类名在文字超出内容盒子时，分别只显示一行，两行，三行+省略号。

```html
<view class="u-line-1">
	是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也
</view>
```


#### 边框

uniapp中，iOS和少数设备使用`1rpx`是能够得到类似`0.5px`的半像素宽度的，但是某些情况下是不兼容的，
故uView提供了一套兼容的css类名，方便用户使用。  
`u-border`表示给元素添加四周的边框，`u-border-top`为上边框，`u-border-right`为右边框，
`u-border-bottom`为下边框，`u-border-left`为左边框。  
说明：如果想调整边框与内容的距离，修改元素的内边距即可。

```html
<view class="u-border-bottom">
	夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外
</view>
```

#### 文字颜色

uView提供了四个关于文字颜色的scss变量名，具体详见文档的[Color 色彩](/components/color.html)部分，分别是：
- `$u-main-color`主要颜色，可以用于标题等需要重颜色的场景
- `$u-content-color`内容颜色，可以用于一般性内容的场景
- `$u-tips-color`提示颜色，可以用于浅颜色的提示语的场景
- `$u-light-color`为比`$u-tips-color`更浅的颜色，可以和`$u-tips-color`搭配使用

举个例子：  
我们平时看到的APP的新闻列表，标题颜色可以用`$u-main-color`，简介部分颜色可以用`$u-content-color`，底部的发布时间文字等可以用`$u-tips-color`。

```html
<!-- 请确保在style标签声明了"lang="scss"" -->
<style lang="scss" scoped>
	.box {
		color: $u-main-color;
	}

	.count {
		border-color: $u-light-color;
	}
</style>
```


#### 主题色

uView提供五个关于主题的scss颜色变量，如有需要，可合理使用。具体详见文档的[Color 色彩](/components/color.html)部分，分别是：

- `$u-type-primary`为蓝色，uView的主色彩，代表热情，友好，积极，向上之意。
- `$u-type-warning`为黄色，代表警告之意。
- `$u-type-success`为绿色，代表成功之意。
- `$u-type-error`为红色，代表错误之意。
- `$u-type-info`为灰色，代表一般信息之意。

```html
<style lang="scss" scoped>
	.item {
		color: $u-type-primary;
	}
</style>
```