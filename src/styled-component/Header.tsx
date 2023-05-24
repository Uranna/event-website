import styled from 'styled-components';

export const HeaderStyled = styled.header`
	width: 100%;
	background: ${(props) => props.theme.bg.header};
	padding: 32px 0 218px;
	color: ${(props) => props.theme.color.header};

	${(props) => props.theme.media.tablet} {
		padding: 32px 0 333px;
	}

	${(props) => props.theme.media.mobile} {
		padding: 0 0 105px;
	}
`;
