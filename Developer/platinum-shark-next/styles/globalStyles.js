import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    cursor: ${(props) => props.theme.cursor};
    background-color: ${(props) => props.theme.primary};
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
