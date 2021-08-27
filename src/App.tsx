import { importData } from 'demo/importData';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminRoute, UserRoute } from 'routes';
import { routeList } from 'routes/constants';

const App: FC = () => {
	const [start, setStart] = useState<number>(0);

	useEffect(() => importData(start, setStart), [start]);

	return (
		<Router>
			<Switch>
				{routeList.map(({ type, ...rest }, i) =>
					type === 'user' ? (
						<UserRoute key={i} {...rest} />
					) : type === 'admin' ? (
						<AdminRoute key={i} {...rest} />
					) : (
						<Route key={i} exact {...rest} />
					),
				)}
			</Switch>
		</Router>
	);
};

export default App;
