import { FC, Fragment } from 'react';
import { Topbar } from './Topbar';

export const UserLayout: FC = ({ children }) => {
	return (
		<Fragment>
			<Topbar />
			<div className="container">
				<div className="row">
					<div className="col">{children}</div>
				</div>
			</div>
		</Fragment>
	);
};
