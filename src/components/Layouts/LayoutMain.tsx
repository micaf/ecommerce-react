import { Outlet } from "react-router-dom"
import Navbar from "../ui/NavBar/NavBar"
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../../styles/theme";
export const LayoutMain: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState<number>(3);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);
  
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar cartItemCount={cartItemCount} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Outlet />
      </ThemeProvider>
    );
}
