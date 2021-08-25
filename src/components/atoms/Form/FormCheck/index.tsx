import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { ElementBorders } from '../../interfaces';
import { FormFeedback } from '../FormInput/styles';
import { FormControl, FormGroup, FormLabel } from './styles';

export const FormCheck: FC<FormCheckProps> = ({ label, message, className, style, ...rest }) => {
	const groupProps = { className, style };

	return (
		<FormGroup {...groupProps}>
			<FormControl {...rest} />
			<FormLabel>{label}</FormLabel>
			{rest.required && <FormFeedback>{message}</FormFeedback>}
		</FormGroup>
	);
};

export interface FormCheckProps extends InputHTMLAttributes<HTMLInputElement>, Pick<ElementBorders, 'rounded'> {
	type: 'checkbox' | 'radio';
	label?: ReactNode;
	message?: string;
}

FormCheck.defaultProps = {
	rounded: false,
	label: '',
};
