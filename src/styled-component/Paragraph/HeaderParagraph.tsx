import styled from 'styled-components';
import { Props } from './types';
import { Paragraph } from './Paragraph';

export const HeaderParagraph = styled(Paragraph)<Props>`
	color: ${(props) => props.color || props.theme.color.header};
	font-size: 1.5rem;
	line-height: 2rem;
	text-align: center;
	margin-bottom: 1.5rem;

	&:last-child {
		margin-bottom: 3rem;
	}

	${(props) => props.theme.media.mobile} {
		margin-bottom: 1rem;
	}
`;
