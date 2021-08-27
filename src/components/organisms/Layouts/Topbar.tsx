import { Button } from 'components/atoms';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { tokenService } from 'service';

export const Topbar: FC = () => {
	const { name } = tokenService.getToken()!;
	const history = useHistory();

	const handleSignOut = () => {
		tokenService.removeToken();
		history.push('/');
	};

	return (
		<div className="d-block pt-3 pb-3 mb-3" style={{ backgroundColor: '#e3f2fd' }}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h4 className="mb-0">{name}</h4>
					</div>
					<div className="col-md-6 text-right">
						<Button pill variant="danger" className="d-block ms-auto" onClick={handleSignOut}>
							Sing out
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
