import { styled } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;

	${(props) => props.theme.media.tablet} {
		max-width: 768px;
	}

	${(props) => props.theme.media.mobile} {
		padding: 0 15px;
	}
`;
