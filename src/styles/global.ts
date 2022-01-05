import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=The+Nautigal:wght@700&display=swap');

font-family:'The Nautigal', cursive;

body {
    color: ${(props) => props.theme.colors.text};
}
`;
