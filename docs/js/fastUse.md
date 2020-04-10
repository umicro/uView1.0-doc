## 便捷工具

<demo-model url="/pages/componentsA/toast/index"></demo-model>


此专题内容为一些方便用户快速，便捷使用的小工具，可能是uView的一些方法的简易版，或者对uni的一些方法进行二次封装，方便用户
快速使用。


#### toast(title, duration = 1500)

- `title` <String\> toast的消息内容
- `title` <Number\> toast出现到消失的时间，单位ms，默认1500ms

此方法为uniapp的`uni.showToast`的二次封装，方便用户使用，参数只能配置`title`和`duration`

```js
this.$u.toast('Hello uView!');
```



