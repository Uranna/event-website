import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${(props) => props.theme.button.main};
	color: white;
	padding: 1rem 3.25rem;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.375rem;
	margin: 0 auto;
  display: block;
	cursor: pointer;

	transition: all 300ms;

	&:hover {
		background: ${(props) => props.theme.button.hover};;
	}
`;
