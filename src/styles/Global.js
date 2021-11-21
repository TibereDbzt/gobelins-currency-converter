import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  * {
    box-sizing: inherit;
  }
  
  body {
    margin: 2rem;
    background: #0D0C1D;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  
  .app {
    display: flex;
    
    > div {
      flex-basis: 50%;
    }
  }
  
  input, button, select {
    display: block;
    margin-top: 0.2rem;
    margin-bottom: 1.2rem;
  }
  
  .cta {
    font-size: 1.6rem;
    padding: 1.2rem 1rem;
    background-color: green;
    border-radius: 0.3rem;
    margin: 3rem 0;
    border: none;
    cursor: pointer;
    
    &.danger {
      background-color: red;
    }
  }
  
  .result {
    font-size: 2rem;
  }
`;

export default GlobalStyle;
