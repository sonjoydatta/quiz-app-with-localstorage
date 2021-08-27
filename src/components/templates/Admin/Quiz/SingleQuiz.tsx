import { AdminLayout } from 'components/organisms';
import { quiz, user, userAnswers } from 'libs/api';
import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const SingleQuiz: FC = () => {
	const { id } = useParams() as { id: string };

	const answersByID = userAnswers.getAnswers(id);
	const quizDetails = quiz.findOne(id);

	const getUserNameByID = (id: string) => {
		const userData = user.findOne(id);
		if (!user) return null;
		return userData?.name;
	};

	return (
		<AdminLayout>
			<div className="row">
				<div className="col">
					<div className="w-100 mt-3">
						{quizDetails ? (
							<Fragment>
								<h2 className="mb-3">{quizDetails.title}</h2>
								{answersByID && answersByID?.answer?.length > 0 ? (
									<ul>
										{answersByID.answer.map(({ answer, userID }, i) => (
											<li
												key={i}
												className={
													answer.trim().toLowerCase() ===
													quizDetails.answer.trim().toLowerCase()
														? 'text-success fw-bold'
														: ''
												}
											>
												{answer} -{' '}
												<small className="fw-normal text-secondary">
													{getUserNameByID(userID)}
												</small>
											</li>
										))}
									</ul>
								) : (
									<p className="text-danger">No reply found!</p>
								)}
							</Fragment>
						) : (
							<p className="text-danger">Someting went wrong</p>
						)}
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
