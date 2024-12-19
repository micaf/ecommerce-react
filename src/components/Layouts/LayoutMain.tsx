import { Outlet } from "react-router-dom";
import Navbar from "../ui/NavBar/NavBar";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyle";

export const LayoutMain: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Outlet />
    </ThemeProvider>
  );
};
