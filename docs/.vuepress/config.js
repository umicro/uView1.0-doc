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
					['/', '安装'],
					['/', '快速上手'],
					['/', '全局配置'],
					['/', '更新日志'],
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
							'/components/layout'
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
						]
					},
				]
			},
		],
		logo: '/logo.png',
	}
}
