import { Button, FormInput } from 'components/atoms';
import { IQuiz, userAnswers } from 'libs/api';
import { useForm } from 'libs/hooks';
import { replyValidations as validate } from 'libs/validations';
import { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { tokenService } from 'service';

export const ReplyForm: FC<ReplyFormProps> = (props) => {
	const { id, title, answer: correctAnswer } = props;
	const { id: userID } = tokenService.getToken()!;
	const history = useHistory();

	const answersByID = userAnswers.getAnswersForUser(id, userID);

	const onCallback = (data: typeof initialValues) => {
		userAnswers.createAnswer(id, { answer: data.answer, userID });
		history.push('/user/dashboard');
	};

	const { values, errors, handleChange, handleSubmit } = useForm({
		initialValues,
		initialErrors,
		validate,
		onCallback,
	});

	return (
		<form onSubmit={handleSubmit} noValidate>
			<h4>{title}</h4>
			{answersByID && answersByID?.answer?.length > 0 && (
				<Fragment>
					<p className="text-secondary mb-0">Previous answer(s):</p>
					<ul>
						{answersByID.answer.map(({ answer }, i) => (
							<li
								key={i}
								className={
									answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
										? 'text-success fw-bold'
										: ''
								}
							>
								{answer}
							</li>
						))}
					</ul>
				</Fragment>
			)}
			<FormInput
				pill
				label="Answer"
				name="answer"
				placeholder="Add your answer"
				onChange={handleChange}
				value={values.answer}
				message={errors.answer}
				required
			/>
			<Button pill variant="success" type="submit">
				Add Reply
			</Button>
		</form>
	);
};

export const initialValues = { answer: '' };
export const initialErrors: Record<keyof typeof initialValues, string | null> = { answer: null };

export type ReplyFormProps = IQuiz;
