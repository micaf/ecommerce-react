import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { FlexContainer, Badge } from "../../../styles/shared";

const NavbarContainer = styled(FlexContainer)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.medium}; // Space between icons
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

interface NavbarProps {
  cartItemCount: number;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, toggleTheme, isDarkMode }) => {
  return (
    <NavbarContainer>
      <Logo href="/">E-Shop</Logo>
      <ActionsContainer>
        <CartIcon>
          <FaShoppingCart />
          {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
        </CartIcon>
        <LampIcon onClick={toggleTheme}>
          {isDarkMode ? <FaLightbulb /> : <FaRegLightbulb />}
        </LampIcon>
      </ActionsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
