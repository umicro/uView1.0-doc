## Search 搜索

搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 通过`placeholder`参数设置占位内容
- 通过`value`设置初始化时搜索框的值

```html
<template>
	<u-search :placeholder="日照香炉生紫烟" :value="遥看瀑布挂前川"></u-search>
</template>
```

### 设置输入框形状

通过`shape`设置输入框两端的形状，`square`(默认)-方形带圆角，`round`-半圆形

```html
<u-search :shape="round"></u-search>
```

### 是否开启清除控件

`clearabled`(默认为`true`)设置为`true`的话，输入框有内容时，右边会显示一个清除的图标

```html
<u-search :clearabled="true"></u-search>
```

### 是否开启右边控件

该控件为类似按钮形式，可以设置为"搜索"或者"取消"等内容，如果开启动画效果，用户确认搜索后，该控件会自动消失

- `show-action`配置是否开启右边按钮控件
- `actiona-text`配置控件内容
- `animation`(默认为`true`)设置为`true`的话，输入框获得焦点，失去焦点，或者点击控件按钮时，控件自动消失，并且带有动画效果

::: warning 说明
如果不想点击右侧控件时自动消失，请把`animation`设置为`false`
:::

```html
<u-search :show-action="true" actiona-text="搜索" :animation="true"></u-search>
```

### 自定义样式

- 通过`input-align`设置输入框内容的对其方式，和css的`text-align`同理
- 通过`border`设置整个搜索组件的边框，要求类似"1px solid #dddddd"的形式
- 通过`height`设置组件高度
- 通过`enabled`设置是否禁用输入框
- 通过`bg-color`设置是搜索组件背景颜色

```html
<u-search :input-align="center" :height="70"></u-search>
```

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| shape | 搜索框形状，round-圆形，square-方形 | String | round | square |
| bg-color | 默认选中的星星数量  | String \| Number | 0 | - |
| placeholder | 占位文字内容 | String | 请输入关键字 | - |
| clearabled | 是否启用清除控件 | Boolean | true | false |
| focus | 是否自动获得焦点 | Boolean | false | true |
| show-action | 是否显示右侧控件 | Boolean | true | false |
| action-atext | 右侧控件文字 | String | 搜索 | - |
| input-align | 输入框内容水平对齐方式 | String | left | center / right |
| enabled | 是否启用输入框 | Boolean | true | false |
| animation | 是否开启动画，见上方说明 | Boolean | false | true |
| border | 边框样式，如"1px solid #dddddd" | String | none | - |
| value | 输入框初始值 | String | - | - |
| height | 输入框高度，单位rpx | String \| Number | 64 | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| change | 输入框内容发生变化时触发 | value：输入框的值 | - |
| search | 用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发 | value：输入框的值 | - |
| custom | 用户点击右侧控件时触发 | value：输入框的值 | - |
