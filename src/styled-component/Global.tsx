import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Segoe UI';
    src: url('SegoeUI.eot');
    src: 
      local('Segoe UI'), 
      local('SegoeUI'),
      url('./assets/font/SegoeUI.eot?#iefix') format('embedded-opentype'),
      url('./assets/font/SegoeUI.woff') format('woff'),
      url('./assets/font/SegoeUI.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('SegoeUI-Italic.eot');
    src: 
      local('Segoe UI-Italic'), 
      local('SegoeUI-Italic'),
      url('./assets/font/SegoeUI-Italic.eot?#iefix') format('embedded-opentype'),
      url('./assets/font/SegoeUI-Italic.woff') format('woff'),
      url('./assets/font/SegoeUI-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('SegoeUI-SemiBold.eot');
    src: 
      local('Segoe UI SemiBold'), 
      local('SegoeUI-SemiBold'),
      url('./assets/font/SegoeUI-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('./assets/font/SegoeUI-SemiBold.woff') format('woff'),
      url('./assets/font/SegoeUI-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Segoe UI';
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    background: ${props => props.theme.bg.body};
  }


  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
