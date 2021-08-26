import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminRoute } from 'routes';
import { routeList } from 'routes/constants';

const App = () => {
	return (
		<Router>
			<Switch>
				{routeList.map(({ type, ...rest }, i) =>
					type === 'public' ? (
						<Route key={i} exact {...rest} />
					) : type === 'admin' ? (
						<AdminRoute key={i} {...rest} />
					) : null,
				)}
			</Switch>
		</Router>
	);
};

export default App;
