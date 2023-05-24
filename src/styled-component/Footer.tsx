import styled from 'styled-components';

export const FooterStyled = styled.footer`
	background: ${(props) => props.theme.bg.accent};
	color: ${(props) => props.theme.color.light};
	padding: 1.25rem 0;
	margin-top: auto
`;
