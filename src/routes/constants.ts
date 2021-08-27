import {
	AddMember,
	AddQuiz,
	AllMembers,
	AllQuizzes,
	Dashboard,
	EditQuiz,
	SingleQuiz,
	UserDashboard,
	UserSignin,
	UserSingleQuiz,
} from 'components/templates';

export const routeList = [
	{ type: 'public', exact: true, path: '/', component: UserSignin },
	{ type: 'admin', path: '/admin/dashboard', component: Dashboard },
	{ type: 'admin', path: '/admin/quiz/all', component: AllQuizzes },
	{ type: 'admin', path: '/admin/quiz/add-new', component: AddQuiz },
	{ type: 'admin', path: '/admin/quiz/edit/:id', component: EditQuiz },
	{ type: 'admin', path: '/admin/quiz/:id', component: SingleQuiz },
	{ type: 'admin', path: '/admin/member/all', component: AllMembers },
	{ type: 'admin', path: '/admin/member/add-new', component: AddMember },
	{ type: 'user', path: '/user/dashboard', component: UserDashboard },
	{ type: 'user', path: '/user/quiz/:id', component: UserSingleQuiz },
];
