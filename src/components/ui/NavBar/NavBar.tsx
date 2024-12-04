import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { FlexContainer, Badge } from "../../../styles/shared";
import CartModal from "../CartModal/CartModal";
import { useCart } from "../../../context/CartContext";

const NavbarContainer = styled(FlexContainer)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.medium}; // Space between icons
  position: relative; /* Ensures CartModal is positioned relative to this container */
`;

const Logo = styled.a`
  font-size: ${(props) => props.theme.typography.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    font-size: ${(props) => props.theme.typography.fontSizes.large};
    color: ${(props) => props.theme.colors.iconColor};
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const LampIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    font-size: ${(props) => props.theme.typography.fontSizes.large};
    color: ${(props) => props.theme.colors.iconColor};
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Navbar: React.FC<{
  cartItemCount: number;
  toggleTheme: () => void;
  isDarkMode: boolean;
}> = ({ toggleTheme, isDarkMode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <NavbarContainer>
      <Logo href="/">E-Shop</Logo>
      <ActionsContainer>
        <CartIcon onClick={toggleCart}>
          <FaShoppingCart />
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </CartIcon>
        <LampIcon onClick={toggleTheme}>
          {isDarkMode ? <FaLightbulb /> : <FaRegLightbulb />}
        </LampIcon>
        <CartModal isOpen={isCartOpen} onClose={toggleCart} />
      </ActionsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
