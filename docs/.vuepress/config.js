module.exports = {
	title: 'uView - 多平台快速开发的UI框架 - uni-app UI框架', // 设置网站标题
	description: 'uView UI，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
	base: '/',
	markdown: {
		//lineNumbers: true
	},
	// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	plugins: ['@vuepress/back-to-top'],
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
		}],
		['meta', {
			name: 'keywords',
			content: 'uview,uView,uviewui,uview ui,uviewUI,uViewui,uViewUI,uView UI,uni ui,uni UI,uni-app ui框架,uni-app UI框架,uniapp ui,ui,UI框架,uniapp ui框架,uniapp UI'
		}],
	],
	
	themeConfig: {
		baseUrl: 'https://api.uviewui.com',
		search: true, // 是否显示顶部搜索框
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
		}, {
			text: '演示',
			link: '/components/demo'
		}, {
			text: '关于我们',
			link: '/cooperation/about'
		}, {
			text: 'GitHub',
			link: 'https://github.com/YanxinNet/uView'
		}],
		sidebar: {
			'/components/': [{
					title: '开发指南',
					collapsable: false,
					sidebarDepth: 0,
					children: [
						['/components/addQQGroup', '加QQ群交流反馈'],
						['/components/intro', '介绍'],
						['/components/install', '安装'],
						['/components/setting', '配置'],
						['/components/quickstart', '快速上手'],
						['/components/demo', '效果演示'],
						['/components/common', '内置样式'],
						['/components/changelog', '更新日志'],
						['/components/customIcon', '扩展自定义图标库'],
						['/components/globalVariable', '全局变量的实现'],
						['/components/codeHint', 'HBuilder X代码提示'],
						['/components/changeGuide', '升级指南'],
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
								'/components/calendar',
								'/components/select',
								'/components/keyboard',
								'/components/picker',
								'/components/rate',
								'/components/search',
								'/components/numberBox',
								'/components/upload',
								'/components/verificationCode',
								'/components/field',
								'/components/checkbox',
								'/components/radio',
								'/components/switch',
								'/components/slider',
								'/components/form',
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
								'/components/modal',
								'/components/fullScreen',
							]
						},
						{
							title: '布局组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/line',
								'/components/card',
								'/components/mask',
								'/components/noNetwork',
								'/components/grid',
								'/components/swiper',
								'/components/timeLine',
								'/components/skeleton',
								'/components/sticky',
								'/components/waterfall',
								'/components/divider',
							]
						},
						{
							title: '导航组件',
							collapsable: false,
							sidebarDepth: 0,
							children: [
								'/components/backTop',
								'/components/navbar',
								'/components/tabs',
								'/components/tabsSwiper',
								'/components/subsection',
								'/components/indexList',
								'/components/steps',
								'/components/empty',
								'/components/link',
								'/components/section',
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
								'/components/loading'
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
					['/layout/wxCenter', '微信个人中心页'],
					['/layout/keyboardPay', '自定义键盘支付'],
					['/layout/menu', '垂直分类'],
					['/layout/submitBar', '提交订单栏'],
					['/layout/comment', '评论列表'],
					['/layout/order', '订单列表'],
					['/layout/login', '登录界面'],
					['/layout/address', '收货地址'],
					['/layout/citySelect', '城市选择'],
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
					['/js/apiManage', 'API集中管理']
				]
			}, {
				title: '工具库',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/js/deepClone', '对象深度克隆'],
					['/js/deepMerge', '对象深度合并'],
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
					['/js/mpShare', '小程序分享'],
				]
			}]
		},
		logo: '/common/logo.png',
		// 需要显示H5预览的地址集合
		simulatorUrl: [
			'/components/intro',
			'/components/install',
			'/components/quickstart',
			'/components/common',
			'/components/changelog',
			'/components/customIcon',
			'/components/line',
			'/components/card',
			'/components/globalVariable',
			'/components/color',
			'/components/icon',
			'/components/button',
			'/components/layout',
			'/components/cell',
			'/components/badge',
			'/components/divider',
			'/components/tag',
			'/components/slider',
			'/components/keyboard',
			'/components/picker',
			'/components/rate',
			'/components/search',
			'/components/numberBox',
			'/components/upload',
			'/components/verificationCode',
			'/components/field',
			'/components/tabsSwiper',
			'/components/checkbox',
			'/components/radio',
			'/components/switch',
			'/components/modal',
			'/components/fullScreen',
			'/components/circleProgress',
			'/components/lineProgress',
			'/components/table',
			'/components/countDown',
			'/components/countTo',
			'/components/actionSheet',
			'/components/alertTips',
			'/components/toast',
			'/components/noticeBar',
			'/components/topTips',
			'/components/collapse',
			'/components/popup',
			'/components/swipeAction',
			'/components/mask',
			'/components/noNetwork',
			'/components/grid',
			'/components/swiper',
			'/components/timeLine',
			'/components/skeleton',
			'/components/sticky',
			'/components/waterfall',
			'/components/tabs',
			'/components/indexList',
			'/components/subsection',
			'/components/steps',
			'/components/empty',
			'/components/link',
			'/components/section',
			'/js/apiManage',
			'/components/messageInput',
			'/components/changeGuide',
			'/components/avatarCropper',
			'/components/loadMore',
			'/components/readMore',
			'/components/lazyLoad',
			'/components/gap',
			'/components/avatar',
			'/components/loading',
			'/layout/menu',
			'/components/codeHint',
			'/layout/coupon',
			'/layout/submitBar',
			'/layout/comment',
			'/layout/order',
			'/layout/intro',
			'/layout/wxCenter',
			'/layout/keyboardPay',
			'/layout/login',
			'/layout/address',
			'/js/time',
			'/js/intro',
			'/js/fastUse',
			'/js/http',
			'/js/route',
			'/js/randomArray',
			'/js/guid',
			'/js/colorSwitch',
			'/js/color',
			'/js/queryParams',
			'/js/test',
			'/js/md5',
			'/js/random',
			'/js/trim',
			'/js/getRect', 
			'/js/mpShare',
			'/components/navbar',
			'/components/calendar',
			'/components/select',
			'/components/form',
			'/components/input',
			'/components/backTop',
			'/js/deepMerge',
			'/js/deepClone',
		],
	}
}
