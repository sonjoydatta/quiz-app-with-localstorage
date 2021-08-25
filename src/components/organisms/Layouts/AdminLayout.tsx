import { FC } from 'react';
import { LeftNavbar } from './LeftNavbar';

export const AdminLayout: FC = ({ children }) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3">
					<LeftNavbar />
				</div>
				<div className="col-md-9">{children}</div>
			</div>
		</div>
	);
};
