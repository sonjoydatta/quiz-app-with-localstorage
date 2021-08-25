import { Button, FormInput } from 'components/atoms';
import { useForm } from 'libs/hooks';
import { signinValidations as validate } from 'libs/validations';
import { FC } from 'react';

export const SigninForm: FC = () => {
	const onCallback = () => {
		console.log('Tested');
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
				label="Email"
				type="text"
				name="emailAddress"
				placeholder="mail@website.com"
				onChange={handleChange}
				value={values.emailAddress}
				message={errors.emailAddress}
				required
			/>
			<FormInput
				pill
				label="Password"
				type="password"
				name="password"
				placeholder="Min. 8 character"
				onChange={handleChange}
				value={values.password}
				message={errors.password}
				required
			/>
			<Button pill block type="submit">
				Sign In
			</Button>
		</form>
	);
};

export const initialValues = { emailAddress: '', password: '' };
export const initialErrors: Record<keyof typeof initialValues, string | null> = { emailAddress: null, password: null };
