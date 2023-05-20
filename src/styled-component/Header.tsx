import styled from 'styled-components';

export const HeaderStyled = styled.header`
	width: 100%;
	background: ${(props) => props.theme.bg.header};
	padding: 218px 0;
	color: ${(props) => props.theme.color.header};

	${(props) => props.theme.media.tablet} {
		padding: 333px 0;
	}

	${(props) => props.theme.media.mobile} {
		padding: 105px 0;
	}
`;
