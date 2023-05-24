import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.show  {
    visibility: true;
  }

  & .backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;
