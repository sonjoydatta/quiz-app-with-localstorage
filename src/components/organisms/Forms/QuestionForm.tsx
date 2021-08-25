import { Button, FormInput } from 'components/atoms';
import { quiz } from 'libs/api';
import { useForm } from 'libs/hooks';
import { questionValidations as validate } from 'libs/validations';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

export const QuestionForm: FC = () => {
	const history = useHistory();

	const onCallback = (data: typeof initialValues) => {
		quiz.create({ title: data.question, answer: data.answer });
		history.push('/quiz/all');
	};

	const { values, errors, handleChange, handleSubmit } = useForm({
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
				Add Quiz
			</Button>
		</form>
	);
};

export const initialValues = { question: '', answer: '' };
export const initialErrors: Record<keyof typeof initialValues, string | null> = { question: null, answer: null };
