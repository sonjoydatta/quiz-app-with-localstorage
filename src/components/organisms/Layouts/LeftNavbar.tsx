import { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { tokenService } from 'service';
import styled from 'styled-components';
import { navItems } from 'utils/constants';

export const LeftNavbar: FC = () => {
	const history = useHistory();

	const handleSignOut = () => {
		tokenService.removeToken();
		history.push('/');
	};

	return (
		<Wrapper>
			<ul className="Navbar">
				{navItems.map(({ name, slug }, i) => (
					<li key={i}>
						<NavLink to={slug} activeClassName="active">
							{name}
						</NavLink>
					</li>
				))}
				<li>
					<button onClick={handleSignOut}>Sign out</button>
				</li>
			</ul>
		</Wrapper>
	);
};

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

			a,
			button {
				font-size: 1rem;
				font-weight: 500;
				padding: 0.5rem 0;
				color: var(--bs-secondary);
				width: 100%;
				display: block;
				text-align: left;
				text-decoration: none;
				border: none;
				box-shadow: none;
				background-color: transparent;

				&.active {
					color: var(--bs-primary);
				}
			}
		}
	}
`;
