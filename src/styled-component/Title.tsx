import styled from 'styled-components';

export const Title = styled.h1`
	color: ${(props) => props.theme.color.header};
	text-transform: uppercase;
	text-align: center;
	font-size: 2.25rem;
	line-height: 3rem;
	margin-top: 3rem;
	margin-bottom: 2rem;

	${(props) => props.theme.media.mobile} {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
`;
