import { ReplyForm, UserLayout } from 'components/organisms';
import { quiz } from 'libs/api';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const UserSingleQuiz: FC = () => {
	const { id } = useParams() as { id: string };

	const getQuizByID = quiz.findOne(id);

	return (
		<UserLayout>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					{getQuizByID ? <ReplyForm {...getQuizByID} /> : <p className="text-danger">Someting went wrong!</p>}
				</div>
			</div>
		</UserLayout>
	);
};
