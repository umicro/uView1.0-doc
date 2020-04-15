## 更新日志

<demo-model url="/"></demo-model>


<div class="doc-update">
	<ul class="u-timeline u-timeline-pending">
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
</style>
