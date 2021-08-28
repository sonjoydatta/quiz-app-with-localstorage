import { importData } from 'demo/importData';
import { FC, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminRoute, UserRoute } from 'routes';
import { routeList } from 'routes/constants';

const App: FC = () => {
	const [start, setStart] = useState<number>(0);

	useEffect(() => importData(start, setStart), [start]);

	return (
		<div className="App">
			<Router basename="https://sonjoydatta.github.io/quiz-test">
				<Switch>
					{routeList.map(({ type, ...rest }, i) =>
						type === 'user' ? (
							<UserRoute key={i} {...rest} />
						) : type === 'admin' ? (
							<AdminRoute key={i} {...rest} />
						) : (
							<Route key={i} {...rest} />
						),
					)}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
