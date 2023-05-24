import styled from 'styled-components';

type Props = {
	minWidth?: string;
};

export const Table = styled.table<Props>`
	min-width: ${({ minWidth = '100%' }) => minWidth};
	width: 100%;
	border: none;
	border-collapse: collapse;

	& tr {
		border: 0 solid #dee2e6;
		border-bottom-width: 1px;
	}

	& thead tr {
		border-top-width: 1px;
		border-bottom-width: 2px;
		text-align: left;
	}

	& tbody tr:last-child {
		border-bottom-width: 0;
	}

	& th {
		font-weight: 600;
	}

	& td,
	& th {
		padding: 15px 12px;
	}
`;
