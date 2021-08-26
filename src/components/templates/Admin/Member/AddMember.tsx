import { AdminLayout, RegisterForm } from 'components/organisms';
import { FC } from 'react';

export const AddMember: FC = () => {
	return (
		<AdminLayout>
			<div className="row">
				<div className="col-md-5">
					<div className="w-100 mt-3">
						<h2>Add New Member</h2>
						<h6 className="text-secondary mb-5">You can add new member!</h6>
						<RegisterForm />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
