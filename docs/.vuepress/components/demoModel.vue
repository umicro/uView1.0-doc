<template>
	<div class="demo-model">
		<div class="model-content">
			<iframe class="iframe" scrolling="no" frameborder="0" :src="url">

			</iframe>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: 'http://www.uviewui.com'
			}
		},
		beforeCreate() {
			// 设置页面的右内边距，空出给模拟H5阅览的区域
			document.getElementsByClassName('page')[0].style.setProperty('padding-right', '330px');
		},
		beforeDestroy() {
			document.getElementsByClassName('page')[0].style.setProperty('padding-right', '0');
		}
	}
</script>

<style scoped>
	.demo-model {
		font-size: 16px;
		background-color: #fff;
		width: 350px;
		position: fixed;
		z-index: 10;
		margin: 0;
		top: calc(3.6em + 3px);
		right: 10px;
		box-sizing: border-box;
		overflow-y: auto;
		background-image: url(/iPhone_model.png);
		height: 610px;
		background-size: 100%;
	}

	.model-content {
		box-sizing: border-box;
		padding: 35px 20px 14px 20px;
		width: 100%;
		height: 100%;
		border-bottom-left-radius: 30px;
	}

	.iframe {
		height: 100%;
		width: 100%;
		border-radius: 0 0 30px 30px;
	}
	
	@media screen and (min-width: 1200px) { 
		.demo-model {
			width: 321px;
			height: 560px;
		}
	}
	@media (max-width: 1200px) {
		.demo-model {
			display: none;
		}
	}
</style>
