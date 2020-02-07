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
			link: '/'
		}, ],
		sidebar: [{
				title: '开发指南',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					['/guide/intro', '介绍'],
					['/guide/install', '安装'],
					['/guide/quickstart', '快速上手'],
					['/guide/common', '内置样式'],
					['/guide/changelog', '更新日志'],
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
		logo: '/logo.png',
	}
}
