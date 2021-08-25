/* eslint-disable indent */
import { initialErrors, initialValues } from 'components/organisms/Forms/SigninForm';
import { isEmailAddress } from 'utils/helpers';

export const signinValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		let key: keyof typeof values;
		for (key in values) {
			const value = values[key]?.trim();

			switch (key) {
				case 'emailAddress':
					if (!value) {
						errors['emailAddress'] = 'Email address is required';
					} else {
						if (!isEmailAddress(value)) {
							errors['emailAddress'] = 'Email address is invalid';
						} else {
							errors['emailAddress'] = null;
						}
					}
					break;

				case 'password':
					if (!value) {
						errors['password'] = 'Password is required';
					} else {
						if (value?.length < 8) {
							errors['password'] = 'Password should be minimum 8 characters';
						} else {
							errors['password'] = null;
						}
					}
			}
		}
	}

	return errors;
};
