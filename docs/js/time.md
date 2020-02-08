## 时间格式

### 格式化时间

#### timeFormat(timestamp, format)

该函数需要传入两个参数，一个是时间戳，另一个是时间的格式，返回一个格式化好的时间。

- `timestamp` <String\> 时间戳
- `format` <String\> 时间格式，默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如：
`yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日 hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合

```html
<template>
	<view>
		<view>
			时间为：{{$u.timeFormat(timestamp, 'yyyy年mm月dd日')}}
		</view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		onLoad() {
			this.time = this.$u.timeFormat(this.timestamp, 'yyyy-mm-dd');
		}
	}
</script>
```

### 多久以前

#### timeFrom(timestamp, format)

该函数需要传入两个参数，一个是时间戳，另一个是时间的格式，返回的值类似`刚刚`，`25分钟前`，`3小时前`，`7天前`

- `timestamp` <String\> 时间戳
- `format` <String\> 时间格式，默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如：
`yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日 hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合。
如果时间戳距离此时的时间，大于一个月，则返回一个格式化好的时间

```html
<template>
	<view>
		<view>
			时间为：{{$u.timeFrom(timestamp, 'yyyy年mm月dd日')}}
		</view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		onLoad() {
			this.time = this.$u.timeFrom(this.timestamp);
		}
	}
</script>
```

