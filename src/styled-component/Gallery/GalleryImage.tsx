import styled from 'styled-components';

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;

  &.active {
    display: block;
  }
`;