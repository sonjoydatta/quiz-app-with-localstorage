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
	{ type: 'admin', exact: true, path: '/admin/dashboard', component: Dashboard },
	{ type: 'admin', exact: true, path: '/admin/quiz/all', component: AllQuizzes },
	{ type: 'admin', exact: true, path: '/admin/quiz/add-new', component: AddQuiz },
	{ type: 'admin', exact: true, path: '/admin/quiz/edit/:id', component: EditQuiz },
	{ type: 'admin', exact: true, path: '/admin/quiz/:id', component: SingleQuiz },
	{ type: 'admin', exact: true, path: '/admin/member/all', component: AllMembers },
	{ type: 'admin', exact: true, path: '/admin/member/add-new', component: AddMember },
	{ type: 'user', exact: true, path: '/user/dashboard', component: UserDashboard },
	{ type: 'user', exact: true, path: '/user/quiz/:id', component: UserSingleQuiz },
];
