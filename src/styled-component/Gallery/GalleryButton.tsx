import styled from 'styled-components';
export const GalleryButton = styled.button`
  width: 30px;
  height: 3px;
  padding: 0;
  background: #E6B37A;
  transition: background 300ms linear;
  cursor: pointer;

  &.active {
    background: #FF8A00;
  }
  
`;