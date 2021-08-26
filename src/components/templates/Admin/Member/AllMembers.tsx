import { AdminLayout } from 'components/organisms';
import { IUser, user } from 'libs/api';
import { FC, useEffect, useState } from 'react';

export const AllMembers: FC = () => {
	const [data, setData] = useState<IUser[]>([]);

	useEffect(() => {
		setData(user.findAll());
	}, []);

	return (
		<AdminLayout>
			<div className="w-100 mt-3">
				<h2 className="mb-5">Members</h2>

				<table className="table">
					<thead>
						<tr>
							<th style={{ width: '40%' }}>Name</th>
							<th style={{ width: '40%' }}>Email</th>
							<th style={{ width: '20%' }}>Admin</th>
						</tr>
					</thead>
					<tbody>
						{data?.length > 0 ? (
							data.map(({ name, emailAddress, isAdmin }, i) => (
								<tr key={i}>
									<td>{name}</td>
									<td>{emailAddress}</td>
									<td>{isAdmin ? 'Yes' : 'No'}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={3}>
									<span className="text-danger">No data found!</span>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</AdminLayout>
	);
};
