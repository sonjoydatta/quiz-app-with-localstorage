import { AddQuiz, AllQuizzes, Dashboard, UserSignin } from 'components/templates';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<UserSignin />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/quiz/all">
					<AllQuizzes />
				</Route>
				<Route path="/quiz/add-new">
					<AddQuiz />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
