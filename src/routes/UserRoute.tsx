import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { tokenService } from 'service';

export const UserRoute: FC<PrivateRouteProps> = ({ component, ...rest }) => {
	const token = tokenService.getToken();

	const routeComponent = (props: any) => {
		if (token?.id && !token?.isAdmin) {
			return React.createElement(component, props);
		} else {
			return <Redirect to={{ pathname: '/' }} />;
		}
	};

	return <Route {...rest} render={routeComponent} />;
};

type PrivateRouteProps = {
	component: any;
} & RouteProps;
