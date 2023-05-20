import styled from 'styled-components';

export type Props = {
	direction?: 'row' | 'column';
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-around'
		| 'space-between'
		| 'space-evenly';
	items?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
	gapX?: string;
	gapY?: string;
	wrap?: 'nowrap' | 'wrap';
	oneSizeChildren?: boolean;
};

export const Flex = styled.div<Props>`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ items }) => items || 'flex-start'};
	row-gap: ${({ gapY }) => gapY || 0};
	column-gap: ${({ gapX }) => gapX || 0};
	flex-wrap: ${({ wrap }) => wrap || 'nowrap'};

	& > .basic {
		flex-basis: 175px;
	}

	& > .flex {
		flex: 1;
		width: 100%;
	}

	${(props) => props.theme.media.tablet} {
		&.tablet {
			flex-direction: column;
		}
	}

	${(props) => props.theme.media.mobile} {
		&.mobile {
			flex-direction: column;
		}

		& > .basic {
			flex-basis: max-content;
			margin-right: 20px;
		}
	}
`;
