import { AdminLayout, QuestionForm } from 'components/organisms';
import { FC } from 'react';

export const AddQuiz: FC = () => {
	return (
		<AdminLayout>
			<div className="row">
				<div className="col-md-5">
					<div className="w-100 mt-3">
						<h2>Add New Quiz</h2>
						<h6 className="text-secondary mb-5">Please add your question &amp; answer over here!</h6>
						<QuestionForm />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};
