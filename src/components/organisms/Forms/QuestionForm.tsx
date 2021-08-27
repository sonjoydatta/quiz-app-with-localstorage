import { Button, FormInput } from 'components/atoms';
import { IQuiz, quiz } from 'libs/api';
import { useForm } from 'libs/hooks';
import { questionValidations as validate } from 'libs/validations';
import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const QuestionForm: FC<QuestionFormProps> = ({ isEdit, id, ...rest }) => {
	const history = useHistory();

	useEffect(() => {
		let key: keyof Pick<QuestionFormProps, 'title' | 'answer'>;
		for (key in rest as Pick<QuestionFormProps, 'title' | 'answer'>) {
			const value = rest[key] as string;

			switch (key) {
				case 'title':
					setValues((prevState) => ({ ...prevState, question: value }));
					break;

				case 'answer':
					setValues((prevState) => ({ ...prevState, answer: value }));
					break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onCallback = (data: typeof initialValues) => {
		if (isEdit && id) {
			quiz.update(id, { title: data.question, answer: data.answer });
			history.push('/admin/quiz/all');
		} else {
			quiz.create({ title: data.question, answer: data.answer });
			history.push('/admin/quiz/all');
		}
	};

	const { values, errors, setValues, handleChange, handleSubmit } = useForm({
		initialValues,
		initialErrors,
		validate,
		onCallback,
	});

	return (
		<form onSubmit={handleSubmit} noValidate>
			<FormInput
				pill
				label="Question"
				name="question"
				placeholder="Type your question"
				onChange={handleChange}
				value={values.question}
				message={errors.question}
				required
			/>
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
				{isEdit ? 'Update Quiz' : 'Add Quiz'}
			</Button>
		</form>
	);
};

export const initialValues = { question: '', answer: '' };
export const initialErrors: Record<keyof typeof initialValues, string | null> = { question: null, answer: null };

export type QuestionFormProps = {
	isEdit?: boolean;
} & Partial<IQuiz>;
