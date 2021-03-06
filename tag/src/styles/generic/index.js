import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  html,
  body {
    height: 100%;
  }

  input {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }

  input:focus {
    outline: none;
  }
`;
