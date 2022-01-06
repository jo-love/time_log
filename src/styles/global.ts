import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=The+Nautigal:wght@700&display=swap');
* {
    color: ${(props) => props.theme.colors.white};
    font-family: sans-serif;
    box-sizing: border-box;
    button {
        cursor: pointer;
        border: none;
    }
    li {
        list-style: none;
    }
a {
    text-decoration: none;
}
    text {
        font-family: 'The Nautigal', cursive;
    }
}
`;
