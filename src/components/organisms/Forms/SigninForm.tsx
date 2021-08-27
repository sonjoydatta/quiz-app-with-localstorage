import { Button, FormInput } from 'components/atoms';
import { user } from 'libs/api';
import { useForm } from 'libs/hooks';
import { signinValidations as validate } from 'libs/validations';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { tokenService } from 'service';

export const SigninForm: FC = () => {
	const history = useHistory();

	const onCallback = (data: typeof initialValues) => {
		const { emailAddress, password } = data;
		const userData = user.singIn(emailAddress, password);
		if (userData) {
			const { isAdmin } = userData;
			tokenService.setToken(userData)!;

			if (isAdmin) {
				history.push('/admin/dashboard');
			} else {
				history.push('/user/dashboard');
			}
		} else {
			setErrors((prevState) => ({ ...prevState, emailAddress: 'Email or password is invalid!' }));
		}
	};

	const { values, errors, setErrors, handleChange, handleSubmit } = useForm({
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
				placeholder="Enter your password"
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
