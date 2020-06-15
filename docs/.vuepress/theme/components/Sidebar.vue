<template>
	<div>
		<aside class="sidebar">
			<a class="jump-link" href="https://www.uviewui.com">
				<img src="/common/contact1.png" />
			</a>
			<NavLinks />
			<slot name="top" />
			<SidebarLinks :depth="0" :items="items" />
			<slot name="bottom" />
		</aside>
	</div>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue';
import NavLinks from '@theme/components/NavLinks.vue';

export default {
	name: 'Sidebar',

	components: { SidebarLinks, NavLinks },

	props: ['items']
};
</script>

<style lang="stylus">
.sidebar
	.jump-link
		margin-top 1rem
		margin-right 2rem
		img {
			max-width 100%
		}

	ul
		padding 0
		margin 0
		list-style-type none
	a
		display inline-block
	.nav-links
		display none
		border-bottom 1px solid $borderColor
		padding 0.5rem 0 0.75rem 0
		a
			font-weight 600
		.nav-item, .repo-link
			display block
			line-height 1.25rem
			font-size 1.1em
			padding 0.5rem 0 0.5rem 1.5rem
	& > .sidebar-links
		padding 1.5rem 0
		padding-top 1rem
		& > li > a.sidebar-link
			font-size 1.1em
			line-height 1.7
			font-weight bold
		& > li:not(:first-child)
			margin-top 0.75rem
@media (max-width: $MQMobile)
	.sidebar
		.nav-links
			display block
			.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
				top calc(1rem - 2px)
		& > .sidebar-links
			padding 1rem 0
</style>
