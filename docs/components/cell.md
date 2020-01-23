## Cell 单元格

cell单元格一般用于一组列表的情况，比如个人中心页，设置页等

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 该组件需要搭配`cell-group`使用，并由它实现列表组的上下边框
- 通过`title`设置左侧标题，`value`设置右侧内容
- 通过`icon`字段设置图标，值为uView自带的图标名

```html
<template>
	<u-cell-group>
		<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
		<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
	</u-cell-group>
</template>
```

### 自定义内容

- 通过插槽`icon`可以自定义图标，内容会替换左边图标位置
- 通过插槽`left`定义左边标题部分，可搭配`title`使用
- 通过插槽`right`定义右边内容部分

```html
<u-cell-group>
	<u-cell-item  title="夕阳无限好" arrow-direction="down">
		<u-icon slot="icon" size="32" name="search"></u-icon>
		<u-badge count="99" slot="left"></u-badge>
		<switch checked slot="right" />
	</u-cell-item>
	<u-cell-item icon="setting-fill" title="只是近黄昏"></u-cell-item>
</u-cell-group>
```

### 展示右箭头

设置`arrow`为`true`，将会显示右侧的箭头，可以通过arrow-direction控制箭头的方向

```html
<u-cell-group>
	<u-cell-item icon="share" title="停车坐爱枫林晚" arrow rrow-direction="down"></u-cell-item>
	<u-cell-item icon="map" title="霜叶红于二月花" :arrow="false"></u-cell-item>
</u-cell-group>
```

### 分组标题

通过`cell-group`的title属性可以指定分组标题

```html
<u-cell-group title="设置喜好">
	<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
	<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
</u-cell-group>
```

### API

### CellGroup Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| title | 分组标题  | String | - | - |
| border | 是否显示外边框 | Boolean  | true | false |

### CellItem Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| title | 左侧标题  | String | - | - |
| icon | 左侧图标名，只支持uView内置图标 | String  | - | - |
| value | 右侧内容 | String  | - | - |
| label | 标题下方的描述信息 | String | - | - |
| border | 是否显示每个cell的下边框 | Boolean  | true | false |
| hover | 是否开启点击反馈，`hover-class`形式 | Boolean  | true | false |
| arrow | 是否显示右侧箭头 | Boolean | true | false |
| arrow-direction | 箭头方向，可选值为 | String  | right | top / bottom |
| title-style | 标题样式，对象形式 | Object | - | - |
| value-style | 右侧内容样式，对象形式 | Object | - | - |
| lable-style | 标题下方描述信息的样式，对象形式 | Object | - | - |

### CellItem Slot

| 名称          | 说明            |
|-------------  |---------------- |
| left | 自定义左侧标题部分你的内容  |
| icon | 自定义左侧的图标 |
| right | 自定义右侧内容 |

### CellItem Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| click | 点击cell列表时触发 | - | - |