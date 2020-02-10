## 规则校验

uView内置了一些校验规则，如是否手机号，邮箱号，URL等  
这些规则方法，挂载在`$u.test`下面，如验证是否手机号：`$u.test.mobile('13888889999')`，如果验证通过，返回`true`，否则返回`false`


### 是否邮箱号

#### email(email)

校验是否邮箱号

- `email` <String\> 字符串

```js
console.log(this.$u.test.email('123465798@gmail.com'));
```


### 是否手机号

#### mobile(mobile)

校验是否邮箱号

- `mobile` <String\> 字符串

```js
console.log(this.$u.test.mobile('13845678900'));
```


### 是否URL

#### url(url)

校验是否邮箱号

- `url` <String\> 字符串

```js
console.log(this.$u.test.url('http://www.uviewui.com'));
```


### 是否普通日期

验证一个字符串是否日期，如下行为正确：
- `2020-02-10`、`2020-02-10 08:32:10`、`2020/02/10 3:10`、`2020/02/10 03:10`、`2020/02-10 3:10`

如下为错误：
- `2020年02月10日`、`2020-02-10 25:32`

总的来说，年月日之间可以用"/"或者"-"分隔，时分秒之间用":"分别，数值不能超出范围，如月份不能为13，则检验成功，否则失败。

#### date(date)

- `date` <String\> 日期字符串

```js
console.log(this.$u.test.date('2020-02-10 08:32:10'));
```


### 是否十进制数值

整数，小数，负数，带千分位数(2,359.08)等可以检验通过

#### number(number)

- `number` <String\> 数字

```js
console.log(this.$u.test.number('2020'));
```


### 是否整数

所有字符都在`0-9`之间，才校验通过

#### digits(number)

- `number` <String\> 数字

```js
console.log(this.$u.test.digits('2020'));
```


### 是否身份证号

身份证号，包括尾数为"X"的类型，可以校验通过

#### idCard(idCard)

- `idCard` <String\> 身份证号

```js
console.log(this.$u.test.idCard('110101199003070134'));
```


### 是否车牌号

可以校验旧车牌号和新能源类型车牌号

#### carNo(carNo)

- `carNo` <String\> 车牌号

```js
console.log(this.$u.test.carNo('京A88888'));
```


### 是否金额

最多两位小数，可以带千分位

#### amount(amount)

- `amount` <String\> 金额字符串

```js
console.log(this.$u.test.amount('3,233.08'));
```


### 是否汉字

可以为单个汉字，或者汉字组成的字符串

#### chinese(zh)

- `zh` <String\> 中文字符串

```js
console.log(this.$u.test.chinese('更上一层楼'));
```


### 是否字母

只能为"a-z"或者"A-Z"之间的字符

#### letter(en)

- `en` <String\> 字母串

```js
console.log(this.$u.test.letter('uView'));
```

### 是否字母或者数字

只能是字母或者数字

#### enOrNum(str)

- `str` <String\> 字母或者数字字符串

```js
console.log(this.$u.test.enOrNum('uView'));
```


### 是否包含某个值

字符串中是否包含某一个子字符串，区分大小写

#### contains(str, subStr)

- `str` <String\> 字符串
- `subStr` <String\> 子字符串

```js
console.log(this.$u.test.contains('uView', 'View'));
```


### 数值是否在某个范围内

如30在"29-35"这个范围内，不在"25-28"这个范围内

#### range(number, range)

- `number` <Number\> 数值
- `range` <Array\> 如"[25-35]"

```js
console.log(this.$u.test.range(35, [30,34]));
```


### 字符串长度是否在某个范围内

如"abc"长度为3，范围在"2-5"这个区间

#### rangeLength(str, range)

- `number` <Number\> 数值
- `range` <Array\> 如"[25-35]"

```js
console.log(this.$u.test.rangeLength('abc', [3, 10]));
```