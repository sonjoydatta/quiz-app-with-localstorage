import { Button } from 'components/atoms';
import { UserLayout } from 'components/organisms';
import { IQuiz, quiz, userAnswers } from 'libs/api';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { tokenService } from 'service';
import styled from 'styled-components';

export const UserDashboard: FC = () => {
	const [data, setData] = useState<IQuiz[]>([]);
	const history = useHistory();
	const { id } = tokenService.getToken()!;

	useEffect(() => {
		setData(quiz.findAll());
	}, []);

	const getReplyCount = (quizID: string) => {
		const answers = userAnswers.getAnswersForUser(quizID, id);
		if (!answers) return 0;
		return answers.answer.length;
	};

	return (
		<UserLayout>
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<table className="table">
						<thead>
							<tr>
								<th style={{ width: '80%' }}>Question</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data?.length > 0 ? (
								data.map(({ id, title }, i) => (
									<tr key={i}>
										<td>{title}</td>
										<td>
											<Button
												pill
												size="sm"
												variant="success"
												className="d-block ms-auto"
												onClick={() => history.push(`/user/quiz/${id}`)}
											>
												Reply <Badge>{getReplyCount(id)}</Badge>
											</Button>
										</td>
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
			</div>
		</UserLayout>
	);
};

const Badge = styled.span`
	font-size: 0.75rem;
	width: 1rem;
	height: 1rem;
	text-align: center;
	border-radius: 100%;
	display: inline-block;
	color: var(--bs-primary);
	background-color: var(--bs-white);
`;
