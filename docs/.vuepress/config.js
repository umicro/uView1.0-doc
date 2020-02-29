module.exports = {
	title: 'uView', // 设置网站标题
	description: 'uView是uniapp生态最优秀的UI框架',
	base: '/',
	markdown: {
		//lineNumbers: true
	},
	plugins: ['@vuepress/back-to-top'],
	themeConfig: {
		sidebarDepth: 0,
		nav: [{
			text: '指南',
			link: '/guide/note'
		}, {
			text: '组件',
			link: '/components/intro'
		}, {
			text: '布局',
			link: '/layout/intro'
		}, {
			text: 'JS',
			link: '/js/intro'
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
						['/components/comparison', '对比其他UI框架'],
						['/components/changelog', '更新日志'],
					]
				},
				{
					title: '组件',
					collapsable: false,
					sidebarDepth: 0,
					children: [{
							title: 'Basic',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/color',
								'/components/icon',
								'/components/button',
								'/components/layout',
								'/components/cell'
							]
						},
						{
							title: 'Form',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/actionSheet',
								'/components/keyboard',
								'/components/picker',
								'/components/messageInput',
								'/components/numberBox',
								'/components/rate',
								'/components/search',
								'/components/upload',
								'/components/verificationCode',
							]
						},
						{
							title: 'Data',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/circleProgress',
								'/components/lineProgress',
								'/components/badge',
								'/components/tag',
								'/components/table',
								'/components/avatarCropper',
							]
						},
						{
							title: 'Notice',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/alertTips',
								'/components/mask',
								'/components/toast',
								'/components/noticeBar',
								'/components/noNetwork',
								'/components/topTips',
								'/components/swipeAction',
							]
						},
						{
							title: 'Navigation',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/tabs',
								'/components/grid',
								'/components/indexList',
								'/components/loadMore',
								'/components/subsection',
								'/components/steps',
								'/components/link',
								'/components/readMore',
								'/components/swiper',
							]
						},
						{
							title: 'Others',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/countDown',
								'/components/countTo',
								'/components/collapse',
								'/components/popup',
								'/components/timeLine',
								'/components/lazyLoad',
								'/components/skeleton',
								'/components/sticky',
								'/components/empty',
								'/components/waterfall',
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
				]
			}, {
				title: '网络',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/http', 'http请求'],
				]
			}, {
				title: '工具库',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/time', '时间格式'],
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
				]
			}]
		},
		logo: '/logo.png',
	}
}
