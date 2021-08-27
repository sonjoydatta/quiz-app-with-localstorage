import { AdminLayout, QuestionForm } from 'components/organisms';
import { quiz } from 'libs/api';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const EditQuiz: FC = () => {
	const { id } = useParams() as { id: string };

	const quizByID = quiz.findOne(id);

	return (
		<AdminLayout>
			<div className="row">
				<div className="col-md-5">
					<div className="w-100 mt-3">
						<h2>Edit Quiz</h2>
						<h6 className="text-secondary mb-5">Please edit your question &amp; answer over here!</h6>
						{quizByID ? (
							<QuestionForm isEdit {...quizByID} />
						) : (
							<p className="text-danger">Someting went wrong!</p>
						)}
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
