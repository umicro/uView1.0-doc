## 自定义主题

<demo-model url="/pages/componentsC/color/index"></demo-model>

uView目前可以自定主题色，字体颜色，边框颜色等，所有组件内部的样式，都基于同一套主题，比如您修改了`primary`主题色，所有用到了`primary`颜色
的组件都会受影响。


### 教程

1. 可以在打开的颜色拾取器中输入或者选择颜色，再点"确定"按钮即可。
2. 颜色配置完后，在页面底部下载文件，会得到一个名为`uview.theme.scss`的文件。
3. 将文件复制到项目的公共目录(视情况而定)中，再在项目根目录的`uni.scss`中引入即可。
4. 删除`uni.scss`文件中原来引入的`@import 'uview-ui/theme.scss';`(旧的内置主题文件引入语句)。
5. 重新编译项目或者重启HX即可生效。


### 主题色

目前有五个主题色，每个主题色又分别有对应的`light`(淡色)、`dark`(深色)、`disabled`(禁止状态时的颜色)：

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['type-primary']" :bg-color="color['type-primary']" name="primary" :value="color['type-primary']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['type-success']" :bg-color="color['type-success']" name="success" :value="color['type-success']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['type-error']" :bg-color="color['type-error']" name="error" :value="color['type-error']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['type-warning']" :bg-color="color['type-warning']" name="warning" :value="color['type-warning']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['type-info']" :bg-color="color['type-info']" name="info" :value="color['type-info']"></color-picker>
	</div>
</div>

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['primary-dark']" :bg-color="color['primary-dark']" name="primary-dark" :value="color['primary-dark']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['success-dark']" :bg-color="color['success-dark']" name="success-dark" :value="color['success-dark']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['error-dark']" :bg-color="color['error-dark']" name="error-dark" :value="color['error-dark']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['warning-dark']" :bg-color="color['warning-dark']" name="warning-dark" :value="color['warning-dark']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['info-dark']" :bg-color="color['info-dark']" name="info-dark" :value="color['info-dark']"></color-picker>
	</div>
</div>

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['primary-disabled']" :bg-color="color['primary-disabled']" name="primary-disabled" :value="color['primary-disabled']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['success-disabled']" :bg-color="color['success-disabled']" name="success-disabled" :value="color['success-disabled']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['error-disabled']" :bg-color="color['error-disabled']" name="error-disabled" :value="color['error-disabled']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['warning-disabled']" :bg-color="color['warning-disabled']" name="warning-disabled" :value="color['warning-disabled']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['info-disabled']" :bg-color="color['info-disabled']" name="info-disabled" :value="color['info-disabled']"></color-picker>
	</div>
</div>

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['primary-light']" color="#606266" :bg-color="color['primary-light']" name="primary-light" :value="color['primary-light']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['success-light']" color="#606266" :bg-color="color['success-light']" name="success-light" :value="color['success-light']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['error-light']" color="#606266" :bg-color="color['error-light']" name="error-light" :value="color['error-light']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['warning-light']" color="#606266" :bg-color="color['warning-light']" name="warning-light" :value="color['warning-light']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['info-light']" color="#606266" :bg-color="color['info-light']" name="info-light" :value="color['info-light']"></color-picker>
	</div>
</div>


### 文字颜色

内置的文字颜色有：主要文字、常规文字，次要文字、占位文字颜色，如需更详细的，详见：[Color 色彩](/components/color.html)章节。

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['main-color']" color="#fff" :bg-color="color['main-color']" name="main-color" :value="color['main-color']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['content-color']" color="#fff" :bg-color="color['content-color']" name="content-color" :value="color['content-color']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['tips-color']" color="#fff" :bg-color="color['tips-color']" name="tips-color" :value="color['tips-color']"></color-picker>
	</div>
	<div class="col-md-2">
		<color-picker v-model="color['light-color']" color="#fff" :bg-color="color['light-color']" name="light-color" :value="color['warning-light']"></color-picker>
	</div>
</div>


### 边框颜色

uView所有组件边框相关的(特别说明的除外)，用的都是这一个颜色。

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['border-color']" color="#606266" :bg-color="color['border-color']" name="border-color" :value="color['border-color']"></color-picker>
	</div>
</div>


### 背景颜色

这个颜色是uView推荐的背景色，目前内置组件中使用的场景不多。

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['bg-color']" color="#606266" :bg-color="color['bg-color']" name="bg-color" :value="color['bg-color']"></color-picker>
	</div>
</div>


### Input边框颜色

此颜色用于在`u-input`组件显示边框时的边框颜色。

<div class="row">
	<div class="col-md-2">
		<color-picker v-model="color['form-item-border-color']" color="#606266" :bg-color="color['form-item-border-color']" name="form-item-border-color" :value="color['form-item-border-color']"></color-picker>
	</div>
</div>


<div class="submit-btn-group">
    <el-button type="primary" @click="downThemeFile">下载主题文件</el-button>
</div>


<script>
	import theme from "../util/theme.js";
	export default {
		data() {
			return {
				color: theme
			}
		},
		created() {
			
		},
		methods: {
			// 生成文件的内容
			downThemeFile() {
				let date = new Date();
				console.log(date)
				let content = `// 此自定义uView主题生成于${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}\n`;
				content += '// 地址：http://www.uviewui.com/guide/theme.html\n\n';
				let i = 0;
				for(let key in this.color) {
					// 拼接成"$u-main-color: #303133;"这种形式
					let tmp = '$u-' + key + ': ' + this.color[key] + ';';
					content += tmp + '\n'; // 换行
				}
				this.download('uview.theme.scss', content);
			},
			// 生成文件并下载
			download(filename, text) {
				var element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
				element.setAttribute('download', filename);
			
				element.style.display = 'none';
				document.body.appendChild(element);
			
				element.click();
			
				document.body.removeChild(element);
			}
		}
	}
</script>


<style scoped lang="scss">
	.submit-btn-group {
		margin-top: 2rem;
		text-align: center;
	}
</style>