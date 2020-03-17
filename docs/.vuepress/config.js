module.exports = {
	title: 'uView - 多平台快速开发的UI框架', // 设置网站标题
	description: 'uView UI，是uniapp生态最优秀的UI框架，全面的组件和便捷的工具会让你信手拈来，如鱼得水',
	base: '/',
	markdown: {
		//lineNumbers: true
	},
	plugins: ['@vuepress/back-to-top'],
	themeConfig: {
		searchPlaceholder: '搜索文档关键字',
		sidebarDepth: 0,
		// lastUpdated: '上次更新时间',
		nav: [{
			text: '指南',
			link: '/guide/note'
		}, {
			text: '组件',
			link: '/components/intro'
		}, {
			text: 'JS',
			link: '/js/intro'
		}, {
			text: '布局',
			link: '/layout/intro'
		}],
		sidebar: {
			'/components/': [{
					title: '开发指南',
					collapsable: false,
					sidebarDepth: 0,
					children: [
						['/components/intro', '介绍'],
						['/components/install', '安装'],
						['/components/quickstart', '快速上手'],
						['/components/common', '内置样式'],
						// ['/components/comparison', '对比其他UI框架'],
						['/components/changelog', '更新日志'],
					]
				},
				{
					title: '组件',
					collapsable: false,
					sidebarDepth: 0,
					children: [{
							title: '基础组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/color',
								'/components/icon',
								'/components/button',
								'/components/layout',
								'/components/cell',
								'/components/badge',
								'/components/tag'
							]
						},
						{
							title: '表单组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/keyboard',
								'/components/picker',
								'/components/rate',
								'/components/search',
								'/components/numberBox',
								'/components/upload',
								'/components/verificationCode',
							]
						},
						{
							title: '数据组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/circleProgress',
								'/components/lineProgress',
								'/components/table',
								'/components/countDown',
								'/components/countTo',
							]
						},
						{
							title: '反馈组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/actionSheet',
								'/components/alertTips',
								'/components/toast',
								'/components/noticeBar',
								'/components/topTips',
								'/components/collapse',
								'/components/popup',
								'/components/swipeAction',
							]
						},
						{
							title: '布局组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/mask',
								'/components/noNetwork',
								'/components/grid',
								'/components/swiper',
								'/components/timeLine',
								'/components/skeleton',
								'/components/sticky',
								'/components/waterfall',
							]
						},
						{
							title: '导航组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/tabs',
								'/components/indexList',
								'/components/subsection',
								'/components/steps',
								'/components/empty',
								'/components/link',
							]
						},
						{
							title: '其他组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/messageInput',
								'/components/avatarCropper',
								'/components/loadMore',
								'/components/readMore',
								'/components/lazyLoad',
								'/components/gap',
								'/components/avatar',
							]
						},
					]
				},
			],
			'/guide': [
				'/guide/note',
				'/guide/design'
			],
			'/layout': [{
				title: '开发指南',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/layout/intro', '介绍'],
				]
			}, {
				title: '部件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/layout/coupon', 'Coupon 优惠券'],
				]
			}, {
				title: '页面',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/layout/menu', '垂直分类'],
					['/layout/submitBar', '提交订单栏'],
					['/layout/comment', '评论列表'],
					['/layout/order', '订单列表'],
					['/layout/login', '登录界面'],
					['/layout/address', '收货地址'],
				]
			}],
			'/js': [{
				title: '开发指南',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/intro', '介绍'],
					['/js/fastUse', '便捷工具'],
				]
			}, {
				title: '网络',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/http', 'Http请求'],
				]
			}, {
				title: '工具库',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/time', '时间格式化'],
					['/js/route', '路由跳转'],
					['/js/randomArray', '数组乱序'],
					['/js/guid', '全局唯一标识符'],
					['/js/colorSwitch', '颜色转换'],
					['/js/color', '颜色值'],
					['/js/queryParams', '对象转URL参数'],
					['/js/test', '规则校验'],
					['/js/md5', 'md5加密'],
					['/js/random', '随机数值'],
					['/js/trim', '去除空格'],
					['/js/getRect', '节点布局信息'],
				]
			}]
		},
		logo: '/logo.png',
	}
}
