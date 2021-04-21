import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --primary-color: #485364;
  --secondary-color: #FF750B;
  --white-text: #FFFFFF;
  --background-color: #E9E9F0;
  --modal-background: transparent linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 80%, #9BA1BC 100%) 0% 0% no-repeat padding-box;

  .MuiCheckbox-root {
    color: #FF750B !important;
  }

  .MuiInputBase-root {
    color: #242A32 !important;
  }

  .MuiInput-underline {
    border-bottom: 1px solid var(--background-color) !important;
  }

  .MuiInput-underline:before {
    border-bottom: none;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #222;
  }

  .MuiInputBase-input {
    font-family: "Source Sans Pro", sans-serif !important;
    font-size: 16px;
    font-weight: 400;
  }

  .MuiInput-underline.Mui-disabled:before {
    border-bottom-style: none;
  }

  input[type=password]::-ms-reveal,
  input[type=password]::-ms-clear {
      display: none;
  }

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Source Sans Pro';
  }
  html {

  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #F2F5F8;
  }
  button, select {
    outline: none;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #111;
  }
`;
