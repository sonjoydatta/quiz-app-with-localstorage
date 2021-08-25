import { FC, SVGAttributes } from 'react';

export const Icon: FC<IconProps> = ({ path, ...rest }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
		<path d={path} />
	</svg>
);

export interface IconProps extends SVGAttributes<SVGElement> {
	path: string;
}

Icon.defaultProps = {
	width: 24,
	height: 24,
	fill: 'var(--bs-light-gray)',
};
