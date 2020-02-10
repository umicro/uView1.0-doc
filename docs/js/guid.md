## 全局唯一标识符

### 格式化时间

#### guid(length)

该函数可以生产一个全局唯一、随机的guid，首字母为`u`，可以用于当做元素的id或者class名等需要唯一，随机字符串的地方

- `length` <Number\> guid的长度，默认为32

```html
<template>
	<view :id="$u.guid()" :class="elClass">
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				elClass: this.$u.guid(20),
			}
		}
	}
</script>
```