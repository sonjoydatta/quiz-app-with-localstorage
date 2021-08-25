import { Button as Btn, ButtonProps } from 'components/atoms';
import Icon, { IconProps } from 'libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

export const IconButton: FC<IconButtonProps> = ({ path, width, height, fill, isCount, count, children, ...rest }) => {
	const iconProps = { path, width, height, fill };

	return (
		<Button {...rest}>
			<Icon {...iconProps} /> {children}
			{isCount && <Count>{count}</Count>}
		</Button>
	);
};

export interface IconButtonProps extends ButtonProps, Pick<IconProps, 'path' | 'width' | 'height' | 'fill'> {
	isCount?: boolean;
	count?: number;
}

IconButton.defaultProps = {
	variant: 'link',
	isCount: false,
	count: 0,
};

const Button = styled(Btn)`
	padding: 0;
	position: relative;
`;

const Count = styled.span`
	width: 1rem;
	height: 1rem;
	font-size: 0.625rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50rem;
	position: absolute;
	top: -3px;
	right: -3px;
	color: var(--white);
	background-color: var(--primary);
`;
