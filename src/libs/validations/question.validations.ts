import { initialErrors, initialValues } from 'components/organisms';
import { formatValidatorKey } from 'utils/helpers';

export const questionValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		let key: keyof typeof values;
		for (key in values) {
			const value = values[key]?.trim();

			if (key in initialErrors) {
				if (!value) {
					errors[key] = `${formatValidatorKey(key)} is required`;
				} else {
					errors[key] = null;
				}
			}
		}
	}

	return errors;
};
