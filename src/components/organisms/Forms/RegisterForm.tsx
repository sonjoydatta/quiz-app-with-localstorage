import { Button, FormCheck, FormInput } from 'components/atoms';
import { user } from 'libs/api';
import { useForm } from 'libs/hooks';
import { registerValidations as validate } from 'libs/validations';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

export const RegisterForm: FC = () => {
	const history = useHistory();

	const onCallback = (data: typeof initialValues) => {
		const userData = user.create(data);
		if (userData) {
			history.push('/admin/member/all');
		} else {
			setErrors((prevState) => ({ ...prevState, emailAddress: 'Member already registed with this email' }));
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
				label="Name"
				name="name"
				placeholder="Full name"
				onChange={handleChange}
				value={values.name}
				message={errors.name}
				required
			/>
			<FormInput
				pill
				label="Email"
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
			<FormCheck
				label="Mark as admin"
				type="checkbox"
				name="isAdmin"
				onChange={handleChange}
				checked={values.isAdmin}
			/>
			<Button pill variant="success" type="submit">
				Add Member
			</Button>
		</form>
	);
};

export const initialValues = { name: '', emailAddress: '', password: '', isAdmin: false };
export const initialErrors: Record<keyof Omit<typeof initialValues, 'isAdmin'>, string | null> = {
	name: null,
	emailAddress: null,
	password: null,
};
