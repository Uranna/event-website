import styled from 'styled-components';

export const HiddenBlock = styled.div`
	&.hidden {
		display: none;
	}

	${(props) => props.theme.media.tablet} {
		&.tablet {
			&-hidden {
				display: none;
			}
		}
	}

	${(props) => props.theme.media.mobile} {
    &.mobile {
			&-hidden {
				display: none;
			}
		}
	}
`;
