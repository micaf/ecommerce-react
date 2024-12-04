import { Outlet } from "react-router-dom"
import Navbar from "../ui/NavBar/NavBar"
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../../styles/theme";
import { CartProvider } from "../../context/CartContext";
import { ProductProvider } from "../../context/ProductContext";
export const LayoutMain: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <CartProvider>
      <ProductProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Navbar cartItemCount={3} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Outlet />
        </ThemeProvider>
      </ProductProvider>
    </CartProvider>
  );
}
