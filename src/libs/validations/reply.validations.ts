import { initialErrors, initialValues } from 'components/organisms/Forms/ReplyForm';
import { formatValidatorKey } from 'utils/helpers';

export const replyValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
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
