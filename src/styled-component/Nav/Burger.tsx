import styled from 'styled-components';
export const Burger = styled.button`
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background: transparent;
	border: none;
	outline: none;
  cursor: pointer;
  display: none;
	position: relative;
	z-index: 10;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  ${(props) => props.theme.media.mobile} {
		display: block;

		&.open-mobile-menu {
			color: black
		}
	}
`;