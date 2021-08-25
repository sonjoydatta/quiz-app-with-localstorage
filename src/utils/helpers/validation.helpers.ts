/**
 * Check whether is number or string
 * @param value
 * @returns
 */
export const isNumber = (value: string): boolean => {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
};

/**
 * Check phone number is valid or NOT
 * @param number - pass phone number
 */
export const isPhoneNumber = (number: string): boolean => {
	const regex = /^((01){1}[3-9]{1}\d{8})$/;
	return regex.test(number);
};

/**
 * Check email address is valid or NOT
 * @param email
 * @returns
 */
export const isEmailAddress = (email: string): boolean => {
	const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/; // eslint-disable-line
	return regex.test(String(email).toLowerCase());
};

/**
 * Check if all properties is NULL
 * @param obj
 * @returns
 */
export const isNullProperties = (obj: Record<string, any>): boolean => {
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== '') return false;
	}
	return true;
};
