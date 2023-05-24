import styled from "styled-components";

export const NavLink = styled.a`
	display: inline-block	;
	padding-bottom: 10px;
	color: white;
	position: relative;

	&::after{
		position: absolute;
    content: '';
    width: 0;
    height: 1px;
    background: white;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: all 300ms linear;
	}

	&:hover::after {
		width: 100%;
	}

	${(props) => props.theme.media.mobile} {
		color: black;
		text-align: center;
		width: 100%;
		padding: 10px 20px;
		
		&::after{
			background: ${props => props.theme.bg.header}
		}

	}
`;
