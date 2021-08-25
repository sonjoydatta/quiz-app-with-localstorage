import styled from 'styled-components';
import { FormCheckProps } from '.';

export const FormGroup = styled.div`
	display: block;
	min-height: 1.5rem;
	padding-left: 1.5rem;
	margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	margin-bottom: 0;
`;

export const FormControl = styled.input<Pick<FormCheckProps, 'rounded'>>`
	cursor: pointer;
	width: 1rem;
	height: 1rem;
	float: left;
	margin-top: 0.25rem;
	margin-left: -1.5em;
	appearance: none;
	vertical-align: top;
	background-color: var(--bs-white);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border: 1px solid rgba(0, 0, 0, 0.25);
	background-color: var(--bs-white);
	border-radius: ${({ rounded }) => (rounded ? '0.25rem' : '100%')};

	&:checked {
		&[type='checkbox'],
		&[type='radio'] {
			border-color: var(--bs-primary);
			background-color: var(--bs-primary);
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
		}

		&[type='radio'] {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
		}
	}

	&:focus {
		outline: none;
		border-color: var(--bs-primary);
		box-shadow: 0 0 0 0.2rem rgba(0, 181, 91, 0.25);
	}

	&:disabled {
		pointer-events: none;
		filter: none;
		opacity: 0.5;

		& ~ ${FormLabel} {
			opacity: 0.5;
		}
	}
`;
