export const MainTheme = ({ themeMode }) => {
  return {
    colors: {
      background: themeMode === "light" ? "#fff" : "#333",
      onBackground : themeMode === "light" ? "#333" : "#fff",
    },
  };
};
