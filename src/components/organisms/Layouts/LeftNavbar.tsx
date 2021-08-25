import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navItems } from 'utils/constants';

export const LeftNavbar: FC = () => (
	<Wrapper>
		<ul className="Navbar">
			{navItems.map(({ name, slug }, i) => (
				<li key={i}>
					<NavLink to={slug} activeClassName="active">
						{name}
					</NavLink>
				</li>
			))}
		</ul>
	</Wrapper>
);

const Wrapper = styled.div`
	width: calc(100% + 1.5rem);
	min-height: 100vh;
	padding: 0.75rem;
	margin-left: -0.75rem;
	background-color: var(--bs-gray-200);

	.Navbar {
		margin: 0;
		padding: 0;

		li {
			width: 100%;
			list-style: none;
			display: block;

			a {
				font-size: 1rem;
				font-weight: 500;
				padding: 0.5rem 0;
				color: var(--bs-secondary);
				display: block;
				text-decoration: none;

				&.active {
					color: var(--bs-primary);
				}
			}
		}
	}
`;
