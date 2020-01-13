## Button 按钮
该组件内部实现以uniapp的`button`组件为基础，进行二次封装，主要区别在于：
- 按钮`type`值有更多的主题颜色
- 有可选的按钮点击水波纹效果
- 按钮`size`值有更多的尺寸可选

::: warning 注意
此组件内部使用uniapp的`button`组件为基础，除了开头中所说的增加的功能，另外暴露出来的props属性和官方组件的属性完全一致，
uniapp的`button`组件比较特殊，因为它有一些其他小程序平台的特定能力，请参考文档后面的参数列表，更详细说明请参考uniapp官方文档：  
[uniapp官方`button`组件](https://uniapp.dcloud.io/component/button)
:::

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用
文字内容通过`slot`传入

```html
<u-button>月落</u-button>
```

### 设置按钮的主题

`type`值可选的有`default`(默认)、`primary`、`success`、`info`、`warning`、`error`

```html
<u-button >默认按钮</u-button>
<u-button type="primary">主要按钮</u-button>
<u-button type="success">成功按钮</u-button>
<u-button type="info">信息按钮</u-button>
<u-button type="warning">警告按钮</u-button>
<u-button type="error">危险按钮</u-button>
```

### 设置按钮为半圆形  

`round`默认值为`false`(按钮为圆角矩形)，设置为`true`，则按钮两边为半圆形

```html
<u-button round>乌啼</u-button>

<!-- 或者显式设置为true -->
<u-button :round="true">霜满天</u-button>
```

### 设置尺寸

相比uniapp官方`button`组件的`size`（可选值为`default`(默认)和`mini`）参数，uView多了个`medium`(中等尺寸)的可选值

```html
<u-button size="default">江湖</u-button>
<u-button size="medium">夜雨</u-button>
<u-button size="mini">十年灯</u-button>
```

### 设置按钮的镂空状态

镂空状态按钮背景为白色，边框和文字同色，通过`plain`来设置

```html
<u-button plain>披荆</u-button>

<!-- 或者显式设置为true -->
<u-button :plain="true">斩棘</u-button>
```

### 设置点击按钮的水波纹效果

该效果通过给按钮绝对定位形式覆盖一个`view`，点击时改变`view`的`scale`，`opacity`样式属性，形成扩散再消失的水波纹效果。

```html
<u-button rippleEffect>十年</u-button>

<!-- 通过rippleBgColor设置水波纹的背景颜色 -->
<u-button rippleEffect :rippleBgColor="#909399">之约</u-button>
```

### 如何修改按钮的样式

组件的根元素就是uniapp的`button`组件，所以修改按钮的样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可

```html
<u-button class="custom-style">雪月夜</u-button>

<style scoped>
	.custom-style {
		color: #606266;
		width: 400rpx;
	}
</style>
```

### API

### Props

如果此文档关于其他平台小程序的开放能力的说明无法满足您的需求，请参考uniapp官方文档：  
[uniapp官方`button`组件](https://uniapp.dcloud.io/component/button)

|属性名|说明|类型|默认值|可选值|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|size|按钮的大小|String|default|medium / mini|-|
|ripple|是否开启点击水波纹效果|Boolean|false|true|-|
|ripple-bg-color|水波纹的背景色，ripple为true时有效|String|rgba(0, 0, 0, 0.15)|-|-|
|type|按钮的样式类型|String|default|primary / success / info/ warning / error|-|
|plain|按钮是否镂空，背景色透明|Boolean|false|true|-|
|disabled|是否禁用|Boolean|false|true|-|
|loading|名称前是否带 loading 图标|Boolean|false|true|App-nvue 平台，在 ios 上为雪花，Android上为圆圈|
|form-type|用于 ``<form>`` 组件，点击分别会触发 ``<form>`` 组件的 submit/reset 事件|String|-|submit / reset|-|
|open-type|开放能力|String|请参考uniapp官方文档|-|-|
|hover-class|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果|String|button-hover|-|App-nvue 平台暂不支持|
|hover-start-time|按住后多久出现点击态，单位毫秒|Number|20|-|-|
|hover-stay-time|手指松开后点击态保留时间，单位毫秒|Number|70|-|-|

### Events

|属性名|说明|类型|默认值|可选值|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|click|按钮点击|Handler|-|-|-|
|getphonenumber|open-type="getPhoneNumber"|Handler|请参考uniapp官方文档|-|微信小程序|
|getuserinfo|用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo|Handler|请参考uniapp官方文档|-|微信小程序|
|error|当使用开放能力时，发生错误的回调|Handler|请参考uniapp官方文档|-|微信小程序|
|opensetting|在打开授权设置页并关闭后回调|Handler|请参考uniapp官方文档|-|微信小程序|
|launchapp|打开 APP 成功的回调|Handler|请参考uniapp官方文档|-|微信小程序|