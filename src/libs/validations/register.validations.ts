/* eslint-disable indent */
import { initialErrors, initialValues } from 'components/organisms/Forms/RegisterForm';
import { formatValidatorKey, isEmailAddress } from 'utils/helpers';

export const registerValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		let key: keyof typeof values;
		for (key in values) {
			if (key in initialErrors) {
				const newKey = key as keyof typeof initialErrors;
				const value = (values[key] as typeof initialValues[keyof typeof initialErrors])?.trim();

				switch (newKey) {
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
						break;

					default:
						if (!value) {
							errors[newKey] = `${formatValidatorKey(key)} is required`;
						} else {
							errors[newKey] = null;
						}
						break;
				}
			}
		}
	}

	return errors;
};
