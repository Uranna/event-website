import styled from 'styled-components';

type Props = {
  overflow?: string
}

export const OverflowBlock = styled.div<Props>`
  max-width: 100%;
  width: 100%;
  overflow: ${({overflow = 'auto'}) => overflow};
`;