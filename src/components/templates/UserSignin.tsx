import { SigninForm } from 'components/organisms';
import { FC } from 'react';
import styled from 'styled-components';

export const UserSignin: FC = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 offset-md-4">
					<FormWrapper>
						<div className="w-100 d-block">
							<h2>Sign in</h2>
							<h6 className="text-secondary mb-5">See your growth by answering the questions!</h6>
							<SigninForm />
						</div>
					</FormWrapper>
				</div>
			</div>
		</div>
	);
};

export const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 22.25rem;
	min-height: 100vh;
`;
