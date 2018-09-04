import Master from './components/_layouts/Master'
import HomeMVC from './components/home/HomeMVC'
import About from './components/about/About'
import News from './components/post/News'
import Contact from './components/contact/Contact'
import Question from './components/question/Question'
import Document from './components/document/Document'
import Calendar from './components/calendar/Calendar'
import Service from './components/service/Service'


const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeMVC
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},
	{
		path: '/news',
		name: 'news',
		component: News
	},
	{
		path: '/question',
		name: 'question',
		component: Question
	},
	{
		path: '/document',
		name: 'document',
		component: Document
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: Calendar
	},
	{
		path: '/service',
		name: 'service',
		component: Service
	},

]

export default routes
