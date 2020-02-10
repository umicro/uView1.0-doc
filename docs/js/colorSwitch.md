## 颜色转换

### RGB转十六进制Hex

#### rgbToHex(rgb)

该函数可以将一个RGB颜色值转换成一个Hex的十六进制颜色值

- `rgb` <String\> RGB颜色值，如`rgb(230, 231, 233)`

```js
export default{
	data() {
		return {
			rgb: 'rgb(13, 145, 20)'
		}
	},
	onLoad() {
		console.log(this.$u.rgbToHex(this.rgb));
	}
}
```


### 十六进制Hex转RGB

#### hexToRgb(hex)

该函数可以将一个Hex的十六进制颜色值转换成一个RGB颜色值

- `hex` <String\> HEx颜色值，如`#0afdce`

```js
export default{
	data() {
		return {
			hex: '#0afdce'
		}
	},
	onLoad() {
		console.log(this.$u.hexToRgb(this.hex));
	}
}
```


### 颜色渐变

#### colorGradient(startColor, endColor, step)

该函数实现两个颜色值之间等分取值，返回一个数组，元素为`rgb`形式的颜色值，数组长度为`step`值。 
例如：colorGradient('rgb(250, 250, 250)', 'rgb(252, 252, 252)', 3)，得到的结果为["#fafafa", "#fafafa", "#fbfbfb"]

- `startColor` <String\> 开始颜色值，可以是HEX或者RGB颜色值，如`#0afdce`或者`rgb(120, 130, 150)`
- `endColor` <String\> 结束颜色值，可以是HEX或者RGB颜色值，如`#0afdce`或者`rgb(120, 130, 150)`
- `step` <Number\> 均分值，把开始值和结束值平均分成多少份

```js
export default{
	onLoad() {
		console.log(this.$u.colorGradient('rgb(250,250,250)', 'rgb(252,252,252)', 3));
		// 结果为：["#fafafa", "#fafafa", "#fbfbfb"]
	}
}
```

