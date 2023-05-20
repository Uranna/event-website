import styled from 'styled-components';
import { Props } from './types';
import { Paragraph } from './Paragraph';

export const WelcomeParagraph = styled(Paragraph)<Props>`
	text-align: center;
	margin: 0 0 1rem;

	&:last-child {
		margin: 0;
	}

	${(props) => props.theme.media.tablet} {
		text-align: left;
	}
`;
