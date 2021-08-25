/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { getThemeColor } from '../utils';

export const Wrapper = styled.button<ButtonProps>`
	text-align: center;
	border: 1px solid transparent;
	${({ size }) => {
		switch (size) {
			case 'sm':
				return css`
					padding: 0.156rem 0.75rem;
				`;

			case 'lg':
				return css`
					padding: 0.688rem 0.75rem;
				`;

			case 'xl':
				return css`
					padding: 0.907rem 0.75rem;
				`;

			default:
				return css`
					padding: 0.532rem 0.75rem;
				`;
		}
	}}
	${({ block }) => {
		if (block) {
			return css`
				width: 100%;
				display: block;
			`;
		} else {
			return css`
				display: inline-block;
			`;
		}
	}};
	${({ variant, outline }) => {
		switch (variant) {
			case 'link':
				return css`
					color: ${getThemeColor('primary')};
					border-color: transparent;
					background-color: transparent;
				`;

			case 'light':
				return css`
					color: ${getThemeColor('dark')};
				`;

			default:
				if (outline) {
					return css`
						color: ${getThemeColor(variant!)};
						border-color: ${getThemeColor(variant!)};
						background-color: transparent;
					`;
				} else {
					return css`
						color: ${getThemeColor('white')};
						border-color: ${getThemeColor(variant!)};
						background-color: ${getThemeColor(variant!)};

						&:hover {
							opacity: 0.95;
						}
					`;
				}
		}
	}};
	border-radius: ${({ pill }) => (pill ? '50rem' : '0.25rem')};
	transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
		opacity 0.2s ease-in-out;

	&:hover {
		${({ variant, outline }) => {
			if (outline && variant !== 'link') {
				return css`
					color: ${getThemeColor('white')};
					background-color: ${getThemeColor(variant!)};
				`;
			} else {
				return css`
					opacity: 0.95;
				`;
			}
		}}
	}

	&:disabled {
		opacity: 0.65;
		cursor: not-allowed;
	}
`;
