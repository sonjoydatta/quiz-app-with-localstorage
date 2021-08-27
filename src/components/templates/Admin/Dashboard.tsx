import { AdminLayout } from 'components/organisms';
import { quiz, user } from 'libs/api';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard: FC = () => {
	const quizCount = () => {
		const quizzes = quiz.findAll();
		if (!quizzes) return 0;
		return quizzes.length;
	};

	const memberCount = () => {
		const members = user.findAll();
		if (!members) return 0;
		return members.length;
	};

	return (
		<AdminLayout>
			<div className="row">
				<div className="col-md-10">
					<div className="w-100 mt-3">
						<h2 className="mb-5">Dashboard</h2>
						<div className="row">
							<div className="col-md-6">
								<div className="card">
									<div className="card-body text-center">
										<h4>Total Quizzes</h4>
										<h1>{quizCount()}</h1>
										<Link to="/admin/quiz/all">Go to Quizzes</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card">
									<div className="card-body text-center">
										<h4>Total Members</h4>
										<h1>{memberCount()}</h1>
										<Link to="/admin/member/all">Go to Members</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
