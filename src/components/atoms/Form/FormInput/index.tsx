import { ElementType, FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { ElementBorders } from '../../interfaces';
import { FormControl, FormFeedback, FormGroup, FormLabel } from './styles';

export const FormInput: FC<FormInputProps> = (props) => {
	const { label, srOnly, message, className, style, required, ...rest } = props;
	const groupProps = { className, style };
	const labelProps = { required, srOnly, children: label };
	const controlProps = { invalid: !!(required && message), required, ...rest };

	return (
		<FormGroup {...groupProps}>
			<FormLabel {...labelProps} />
			<FormControl {...controlProps} />
			{required && <FormFeedback>{message}</FormFeedback>}
		</FormGroup>
	);
};

export interface FormInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'cols' | 'rows'>,
		Pick<ElementBorders, 'pill'> {
	as?: ElementType;
	label?: string;
	srOnly?: boolean;
	message?: string | null;
}

FormInput.defaultProps = {
	srOnly: false,
};
