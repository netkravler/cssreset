import { ThemeProvider } from "styled-components";
import { MainTheme } from "./Styles/Themes/MainTheme";
import { GlobalStyles } from "./Styles/Global";
import { Toggler } from "./Components/DarkmodeSwitch/Toggler";
import { useDarkmodeStore } from "./Components/DarkmodeSwitch/useDarkmodeStore";

function App() {
  /** get value of theme from the themestore */
  const { mode } = useDarkmodeStore();

  /**set theme to dark or light */
  const themeMode = mode === "light" ? "light" : "dark";

  return (
    <ThemeProvider theme={MainTheme({ themeMode })}>
      <Toggler />
      <GlobalStyles />
      <article>
        <header>
          <h1>Jeg er lige her</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, doloremque sapiente similique facere expedita nihil, autem eligendi commodi corrupti tempora perferendis vitae
            aliquam ut modi animi hic odio aut!
          </p>
        </header>
      </article>
    </ThemeProvider>
  );
}

export default App;
