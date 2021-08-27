import { IconButton } from 'components/molecules';
import { AdminLayout } from 'components/organisms';
import { IQuiz, quiz, userAnswers } from 'libs/api';
import { deleteBin, eyeOpen, pencil } from 'libs/icons';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AllQuizzes: FC = () => {
	const [data, setData] = useState<IQuiz[]>([]);
	const history = useHistory();

	useEffect(() => {
		setData(quiz.findAll());
	}, []);

	const handleDelete = (id: string) => {
		quiz.delete(id);
		setData((prevState) => [...prevState.filter((e) => e.id !== id)]);
	};

	const getQuizReplyCount = (id: string) => {
		const answers = userAnswers.getAnswers(id);
		if (!answers) return 0;
		return answers.answer.length;
	};

	return (
		<AdminLayout>
			<div className="w-100 mt-3">
				<h2 className="mb-5">Quizzes</h2>

				<table className="table">
					<thead>
						<tr>
							<th style={{ width: '35%' }}>Question</th>
							<th style={{ width: '35%' }}>Answer</th>
							<th className="text-center" style={{ width: '10%' }}>
								Reply
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data?.length > 0 ? (
							data.map(({ id, title, answer }, i) => (
								<tr key={i}>
									<td>{title}</td>
									<td>{answer}</td>
									<td className="text-center">{getQuizReplyCount(id)}</td>
									<td>
										<div className="d-flex justify-content-evenly">
											<IconButton
												path={eyeOpen}
												fill="var(--bs-success)"
												onClick={() => history.push(`/admin/quiz/${id}`)}
											/>
											<IconButton
												path={pencil}
												fill="var(--bs-primary)"
												onClick={() => history.push(`/admin/quiz/edit/${id}`)}
											/>
											<IconButton
												path={deleteBin}
												fill="var(--bs-danger)"
												onClick={() => handleDelete(id)}
											/>
										</div>
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
		</AdminLayout>
	);
};
