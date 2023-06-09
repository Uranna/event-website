import styled from 'styled-components';

type Props = {
	margin?: string;
};

export const Title2 = styled.h2<Props>`
	font-size: 1.5rem;
	line-height: 2.75rem;
	font-weight: 600;
	text-align: center;
	color: ${(props) => props.theme.color.text};
	margin: ${({ margin = '0 0 1rem 0' }) => margin};

	&.title-cost {
		line-height: 1;
	}

	& .small-text {
		font-size: 1rem;
	}

	& .tablet,
	& .mobile {
		display: none;
	}

	& .pc {
		display: inline;
	}

	${(props) => props.theme.media.tablet} {
		& .pc,
		& .mobile {
			display: none;
		}

		& .tablet {
			display: inline;
		}

		${(props) => props.theme.media.mobile} {
			text-align: left;
			& .pc,
			& .tablet {
				display: none;
			}

			& .mobile {
				display: inline;
			}
		}
	}
`;
