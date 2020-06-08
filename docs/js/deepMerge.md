## deepClone 对象深度合并

<demo-model url="/pages/library/deepMerge/index"></demo-model>


#### deepMerge(target = {}, source = {})

在ES6中，我们可以很方便的使用`Object.assign`进行对象合并，但这只是浅层的合并，如果对象的属性为数组或者对象的时候，会导致属性内部的值丢失。
  
**注意：** 此处合并不同于`Object.assign`，因为`Object.assign(a, b)`会修改`a`的值为最终的结果(这往往不是我们所期望的)，但是`deepMerge(a, b)`并不会修改`a`的值。

- `target` <Object\> 目标对象
- `source` <Object\> 源对象

`Object.assign`浅合并示例：

```js
let a = {
	info: {
		name: 'mary'
	}
}

let b = {
	info: {
		age: '22'
	}
}

// 使用Object.assign进行合并，注意此时a被修改了
let c = Object.assign(a, b);

// 我们期望的结果为：
c = {
	info: {
		name: 'mary',
		age: '22'
	}
}

// 事实上，我们得到的结果却为：
c = {
	info: {
		age: '22'
	}
}
```

深度合并示例：

```js
let a = {
	info: {
		name: 'mary'
	}
}

let b = {
	info: {
		age: '22'
	}
}

let c = this.$u.deepMerge(a, b);

// c为我们期望的结果
c = {
	info: {
		age: '22',
		name: 'mary'
	}
}
```