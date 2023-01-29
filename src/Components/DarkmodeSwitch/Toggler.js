import React, { useCallback } from "react";

import styled from "styled-components";
import UiToggle from "../UiToggle/UiToggle";

import { useDarkmodeStore } from "./useDarkmodeStore";

export const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1000;
`;
export const Toggler = () => {
  const { mode, setMode } = useDarkmodeStore();

  const changeTheme = useCallback(() => {
    let change = mode === "light" ? "dark" : "light";

    setMode(change);
  }, [mode, setMode]);

  return (
    <ThemeToggler>
      <span role="img" aria-label="lightmode">
        🌞
      </span>
      <div>
        <UiToggle id="darkModeSwitch" checked={mode === "dark"} onChange={() => changeTheme()} />
      </div>
      <span role="img" aria-label="darkMode">
        🌙
      </span>
    </ThemeToggler>

  );
};
