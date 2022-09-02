import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


h1,h2,h3,h4,h5,h6 {
   display: inline-block
}


body {
    margin: 0;
    padding:0;
   // font-family: 'Cormorant Garamond', serif;
   //   font-family: 'Merriweather', serif;
   font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    overflow: ${(props) => (props.sidebarOpened ? "hidden" : "")};
}`;

export default GlobalStyle;
