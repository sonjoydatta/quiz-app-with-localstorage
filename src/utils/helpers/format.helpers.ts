export const formatReadable = (value: string): string => {
	return value.replace(/([A-Z])/g, ' $1');
};

export const formatValidatorKey = (value: string): string => {
	const val = formatReadable(value);
	return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};
