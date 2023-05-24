import styled from "styled-components";

export const NavList = styled.ul`
	display: flex;
	justify-content: space-between;

	${(props) => props.theme.media.mobile} {
		position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    transition: all 300ms linear;
    height: 0;

	}

	&.show {
		height: 250px;
		padding: 3rem 0 20px ;
	}
`;