## 更新日志

<demo-model url="/"></demo-model>


<div class="doc-update">
	<ul class="u-timeline u-timeline-pending">
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.6</h2>
				</div>
				<p><code>2020-04-19</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						增加top-tips组件对自定义导航栏适配的说明，详见<a target="_blank" href="/components/topTips.html#自定义导航栏使用本组件的问题">自定义导航栏使用本组件的问题</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加文档对引入scss变量的提示，详见<a target="_blank" href="/components/common.html#说明">说明</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化easycom的引入规则，减少和其他组件库冲突的可能性，提供和"uParse"插件名称冲突的解决方案，详见<a target="_blank" href="/components/quickstart.html#_3-配置easycom组件模式">说明</a>
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabs组件延后赋值，组件无效果的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker组件时间模式只显示部分参数时，默认值不对的问题
					</li>
					<li>
						<span class="fix">修复</span>
						改正navbar组件的title-size参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复search组件文档关于disabled的描述错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.5</h2>
				</div>
				<p><code>2020-04-17</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						重磅推出自定义导航栏组件，详见<a target="_blank" href="/components/navbar.html">Navbar 自定义导航栏</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加控制弹窗组件圆角的参数
					</li>
					<li>
						<span class="add">新增</span>
						upload上传组件新增每次选择完图片后抛出on-choose-complte事件
					</li>
					<li>
						<span class="optimize">优化</span>
						为更强的自定义性，collapse组件的头部和主体样式改为用对象形式传入，请留意
					</li>
					<li>
						<span class="optimize">优化</span>
						给tabsSwiper组件添加加载更多的示例，同时修复一些问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复collapse的props参数类型问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabsSwiper组件延后赋值list参数报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Picker在小程序上默认值可能无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复collapse的active-style参数报错的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.4</h2>
				</div>
				<p><code>2020-04-15</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						badge组件可以自定义字体和背景颜色
					</li>
					<li>
						<span class="add">新增</span>
						新增<a target="_blank" href="/components/divider.html">Divider 分割线</a>组件
					</li>
					<li>
						<span class="add">新增</span>
						添加参数控制<a target="_blank" href="/js/http.html#何谓响应拦截？">Http请求</a>响应拦截器的返回数据格式
					</li>
					<li>
						<span class="add">新增</span>
						车牌号键盘新增"挂"字按键
					</li>
					<li>
						<span class="optimize">优化</span>
						修改演示中的图片引用为https资源
					</li>
					<li>
						<span class="optimize">优化</span>
						调整actionSheet组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整keyboard组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整popup弹出组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整picker选择组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="fix">修复</span>
						条件编译抵消tabs组件在微信小程序上watch初始化时自动触发的bug
					</li>
					<li>
						<span class="fix">修复</span>
						修复keyboard键盘组件数字模式时点按钮配置无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						改正文档关于自定义图标库中截图的错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.3</h2>
				</div>
				<p><code>2020-04-14</code></p>
				<ul>
					<li>新增u-button组件对uniapp的button组件开放能力的对接</li>
					<li>新增允许field组件的maxlength参数为字符串数值形式</li>
					<li>
						修复文档关于upload组件的参数错误
					</li>
					<li>修复cell组件右箭头方向参数无效的问题</li>
					<li>调整icon图标的使用，防止图标可能存在不垂直居中的情况</li>
					<li>文档添加右侧的tabs组件演示</li>
					<li>修复tabs组件演示可能会产生混乱的问题</li>
					<li>修复HX2.6.11版报"@/store/$u.mixin.js"不存在的警告</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.2</h2>
				</div>
				<p><code>2020-04-13</code></p>
				<!-- <h2>修复Bug，整理文档的多处友好提示</h2> -->
				<ul>
					<li>修复文档对section组件右侧内容点击事件的遗漏</li>
					<li>修复tabs组件文档参数描述错误</li>
					<li>
						快速上手中示例有误
					</li>
					<li>swiper的show-title参数改为title，增加3d模式对两边边距的控制参数</li>
					<li>验证规则对手机号的正则有误</li>
					<li>修复文档演示中swiper无法鼠标滑动的问题</li>
					<li>调整cell-group对标题样式的定义方式</li>
					<li>增加参数可以控制radio和checkbox的大小</li>
					<li>增加文档演示区域在宽屏下的尺寸</li>
					<li>调整原tabs组件为tabsSwiper组件，新增简洁版tabs组件</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.1</h2>
				</div>
				<p><code>2020-04-12</code></p>
				<!-- <h2>修复Bug，整理文档的多处友好提示</h2> -->
				<ul>
					<li>修复swipeAction演示可能由于操作引起的错误</li>
					<li>完善文档对checkbox，radio的描述</li>
					<li>
						添加文档对演示效果的友好提示，详见<a target="_blank" href="/components/sticky.html">Sticky 吸顶</a>(电脑端查看)
					</li>
					<li>修改某些图标名，把中划线改成下划线，统一风格</li>
					<li>修复宫格组件在某些特定机型可能会混乱的问题</li>
					<li>改正文档的多处错别字，感谢同学们的细心观察</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.0</h2>
				</div>
				<p><code>2020-04-11</code></p>
				<h2>正式发布，进入公测阶段，如需交流反馈，请加QQ群：1042987248</h2>
				<ul>
					<li>包含50+组件</li>
					<li>众多JS工具库</li>
					<li>精致模板，众多模板正在加入中</li>
				</ul>
			</div>
		</li>
	</ul>
</div>


<style>
	.doc-update {
		padding: 10px 5px;
		position: relative;
		line-height: 1.5;
		color: #515a6e;
	}
	
	.u-timeline {
		padding-left: 0;
	}

	.u-timeline-item-tail {
		height: 100%;
		border-left: 1px solid #e8eaec;
		position: absolute;
		left: 7px;
		top: 0;
	}

	.u-timeline-item-head {
		width: 13px;
		height: 13px;
		background-color: #fff;
		border-radius: 50%;
		border: 1px solid transparent;
		position: absolute;
	}

	.u-timeline-item-head-blue {
		border-color: #2d8cf0;
		color: #2d8cf0;
	}

	.doc-update .u-timeline .u-timeline-item-content {
		top: -4px;
	}

	.u-timeline-item-content {
		padding: 1px 1px 10px 28px;
		font-size: 14px;
		position: relative;
		top: -3px;
	}

	.doc-update h2 {
		font-size: 18px;
		font-weight: 400;
		display: inline-block;
		margin: 0;
		border: none;
		color: #515a6e;
	}

	.page .doc-update p {
		margin: 5px 0!important;
		font-size: 14px;
	}

	.doc-update code {
		margin: 8px 0!important;
		font-size: 85%;
		background-color: #fff5f5!important;
		border-radius: 3px;
		font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
		color: #fa795e!important;
		padding: 2px 4px;
	}

	.doc-update ol ul:not([class^=u-]),
	.doc-update ul ul:not([class^=u-]) {
		list-style-type: circle;
	}

	.doc-update li:not([class^=u-]) {
		margin-bottom: 5px;
		font-size: 14px;
	}

	a {
		color: #2d8cf0;
		background: 0 0;
		text-decoration: none;
		outline: 0;
		cursor: pointer;
		transition: color .2s ease;
	}

	.u-timeline-item {
		margin: 0 !important;
		padding: 0 0 12px;
		list-style: none;
		position: relative;
	}
	
	.u-timeline-item span {
		display: inline-block;
		padding: 4px 8px;
		border-radius: 4px;
		color: #fff;
		font-size: 12px;
		border-width: 1px;
		border-style: solid;
		line-height: 1;
		margin-right: 5px;
	}
	
	.u-timeline-item span.fix {
		color: rgb(255, 153, 0);
		background-color: rgb(253, 246, 236);
		border-color: rgb(252, 189, 113);
	}
	
	.u-timeline-item span.add {
		color: rgb(25, 190, 107);
		background-color: rgb(219, 241, 225);
		border-color: rgb(113, 213, 161);
	}
	
	.u-timeline-item span.optimize {
		color: rgb(41, 121, 255);
		background-color: rgb(236, 245, 255);
		border-color: rgb(160, 207, 255);
	}
</style>
