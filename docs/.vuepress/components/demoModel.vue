<template>
	<div class="demo-model">
		<div class="model-content">
			<iframe class="iframe" frameborder="0" :src="url">

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
	
	@media screen and (max-width: 1367px) { 
		.demo-model {
			width: 321px;
			height: 560px;
		}
	}
</style>
