import styled from 'styled-components';

export const NavStyled = styled.nav`
  padding: 0.75rem 0;
  margin-bottom: 120px;

  ${(props) => props.theme.media.mobile} {
		margin-bottom: 36px
	}
`;
