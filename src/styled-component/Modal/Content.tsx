import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  background: ${(props) => props.theme.bg.body};
  padding: 2rem;
  margin: 0 20px;
  max-width: 404px;
  width: 100%;

  .modal__header {
    color: #9fa3ab;
    font-size: 1.625rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .modal__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: #b5bfc3;
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    width: 1rem;
    height: 1rem;

    cursor: pointer;
  }
`;
