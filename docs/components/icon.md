## Icon 图标

<demo-model url="/pages/componentsA/icon/index"></demo-model>


基于字体的图标集，包含了大多数常见场景的图标。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`<u-icon>`形式来调用，设置`name`参数为图标名即可

```html
<u-icon name="photo"></u-icon>
```

### 修改图标的样式

- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为rpx

```html
<u-icon name="photo" color="#2979ff" size="28"></u-icon>
```

### API

### Props

| 参数      | 说明        | 类型     |  默认值  |  可选值   |
|-----------|-----------|----------|----------|---------|
| name | 图标名称，见示例图标集  | String | - | - |
| color | 图标颜色 | String  | inherit | - |
| size | 图标字体大小，单位rpx | String \| Number  | 32 | - |
| index | 一个用于区分多个图标的值，点击图标时通过`click`事件传出 | String  | - | - |
| hover-class | 图标按下去的样式类，用法同uni的`view`组件的`hover-class`参数，详见：[hover-class](https://uni-appp.dcloud.io/component/view) | String  | - | - |

### Events

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
|click|点击图标时触发|index: 通过`props`传递的`index`值|-|

### 图标集

<icon />

