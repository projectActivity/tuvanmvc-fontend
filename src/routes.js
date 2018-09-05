import Master from './components/_layouts/Master'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/home/HomeMVC')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/components/about/About')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('@/components/contact/Contact')
	},
	{
		path: '/news',
		name: 'news',
		component: () => import('@/components/post/News')
	},
	{
		path: '/question',
		name: 'question',
		component: () => import('@/components/question/Question')
	},
	{
		path: '/document',
		name: 'document',
		component: () => import('@/components/document/Document')
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: () => import('@/components/calendar/Calendar')
	},
	{
		path: '/service/:slug',
		name: 'service',
		component: () => import('@/components/service/Service')
	},

]

export default routes
