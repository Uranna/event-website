import styled from 'styled-components';

type Props = {
	background?: string;
};

export const Section = styled.section<Props>`
	background: ${(props) => props.background || props.theme.bg.accent};
	padding: 3rem 0;

	${(props) => props.theme.media.mobile} {
		padding: 1.5rem 0;
	}
`;
