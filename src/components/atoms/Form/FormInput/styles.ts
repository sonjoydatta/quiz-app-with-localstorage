/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { FormInputProps } from '.';

interface FormControlProps extends Pick<FormInputProps, 'pill' | 'required'> {
	invalid?: boolean;
}

export const FormGroup = styled.div`
	display: block;
	margin-bottom: 1rem;
`;

export const FormLabel = styled.label<FormInputProps>`
	display: inline-block;
	margin-bottom: 0.25rem;

	${({ srOnly }) => {
		if (srOnly) {
			return css`
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				white-space: nowrap;
				-webkit-clip-path: inset(50%);
				clip-path: inset(50%);
				border: 0;
			`;
		}
	}}

	&:after {
		${({ required }) => {
			if (required) {
				return css`
					content: ' *';
					color: var(--bs-danger);
				`;
			}
		}}
	}
`;

export const FormControl = styled.input<FormControlProps>`
	width: 100%;
	display: block;
	padding: 0.532rem 1rem;
	border: 1px solid var(--bs-border);
	${({ pill }) => {
		if (pill) {
			return css`
				border-radius: 50rem;
			`;
		} else {
			return css`
				border-radius: 0.25rem;
			`;
		}
	}}
	transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

	&:focus {
		outline: none;
		border-color: var(--bs-primary);
		box-shadow: 0 0 0 0.2rem rgba(0, 181, 91, 0.25);
	}

	&:disabled {
		pointer-events: none;
		filter: none;
		opacity: 0.5;
	}

	${({ invalid }) => {
		if (invalid) {
			return css`
				border-color: var(--bs-danger);
				box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);

				&:focus {
					border-color: var(--bs-danger);
					box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
				}
			`;
		}
	}}
`;

export const FormFeedback = styled.p`
	color: var(--bs-danger);
	margin-bottom: 0;
`;
