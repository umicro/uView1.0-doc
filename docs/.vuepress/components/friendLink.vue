<template>
	<div class="row friend-link">
		<div class="col-md-4 col-sm-4 col-xs-12 friend-link__wrap">
			<a target="_blank" class="friend-link__wrap__item" href="http://beautiful.panm.cn/vue-admin-beautiful/#/index">
				<img src="/friend-link/vue-admin-beautiful.png">
			</a>
		</div>
		<div class="col-md-4 col-sm-4 col-xs-12 friend-link__wrap">
			<a target="_blank" class="friend-link__wrap__item" href="https://github.com/livelyPeng/pl-table">
				<img src="/friend-link/pl-table.jpg">
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.friend-link {
		&__wrap {
			margin-top: 8px;
			
			&__item {
				border-radius: 5px;
				overflow: hidden;
				display: inline-block;
			}
		}
		
	}
</style>
