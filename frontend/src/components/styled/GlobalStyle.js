import { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryColor: 'hsl(0, 0%, 26%)',
  secondaryColor: 'hsl(21, 100%, 45%)',
  textColor: 'hsl(34, 78%, 91%)'
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
    background-color: ${theme.primaryColor};
    color: ${theme.textColor};
  }
`
