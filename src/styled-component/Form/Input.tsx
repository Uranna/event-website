import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: 1px solid #b5bfc3;
  padding: 0.375rem 0.5rem;
  margin-bottom: 1rem;

  &:focus {
    border-color: ${props => props.theme.bg.header}
  }
`;
