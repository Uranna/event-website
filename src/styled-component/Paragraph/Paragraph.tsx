import styled from 'styled-components';
import { Props } from './types';

export const Paragraph = styled.p<Props>`
	font-size: ${({ size = '1rem' }) => size};
	line-height: ${({ leading = '1.3rem' }) => leading};

	font-weight: ${({ weight = 400 }) => weight};
	font-style: ${({ fontStyle = 'normal' }) => fontStyle};
	text-transform: ${({ transform = 'none' }) => transform};

	text-align: ${({ align = 'left' }) => align};

	color: ${(props) => props.color || props.theme.color.main};

	margin: ${({ margin }) => margin};

	${(props) => props.theme.media.tablet} {
		&.tablet {
			&-align {
				&-left {
					text-align: left;
				}
			}
		}
	}

	${(props) => props.theme.media.mobile} {
		&.mobile {
		}
	}
`;
