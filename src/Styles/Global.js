import { createGlobalStyle, css } from "styled-components";
import { Resets } from "./Resets";

export const GlobalStyles = createGlobalStyle`${css`
  * {
    ${Resets}
  }

  body,
  html,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.onBackground};
  }
`}`;
