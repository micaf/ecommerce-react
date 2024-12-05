import styled, { keyframes } from "styled-components";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

// Slide animation
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const QuantityButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary || "#FFC107"};
  color: ${(props) => props.theme.colors.textPrimary || "#000000"};
  border: none;
  border-radius: ${(props) => props.theme.borders.radius.small || "4px"};
  padding: ${(props) => props.theme.spacing.xsmall || "4px 8px"};
  font-size: ${(props) => props.theme.typography.fontSizes.medium || "14px"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary || "#0056b3"};
    color: ${(props) => props.theme.colors.textSecondary || "#FFFFFF"};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.border || "#E0E0E0"};
    color: ${(props) => props.theme.colors.textPlaceholder || "#A0A0A0"};
    cursor: not-allowed;
  }
`;

const CartModalContainer = styled.div`
  position: absolute;
  top: 100%; /* Below the navbar */
  right: 0;
  background-color: ${(props) => props.theme.colors.surface || "#121212"};
  color: ${(props) => props.theme.colors.textPrimary || "#FFFFFF"};
  border-radius: ${(props) => props.theme.borders.radius.medium || "8px"};
  box-shadow: ${(props) => props.theme.shadows.large};
  padding: ${(props) => props.theme.spacing.medium};
  animation: ${slideDown} 0.3s ease-out;
  z-index: 1000;
  overflow: hidden;
`;

const CartTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.border || "#E0E0E0"};
    padding-bottom: ${(props) => props.theme.spacing.small};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  .product-info {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.small};

    img {
      width: 50px;
      height: 50px;
      border-radius: ${(props) => props.theme.borders.radius.small};
      object-fit: cover;
    }

    .details {
      flex: 1;
    }
  }
`;

const TotalSection = styled.div`
  margin-top: ${(props) => props.theme.spacing.medium || "16px"};
  font-size: ${(props) => props.theme.typography.fontSizes.large || "18px"};
  text-align: center;
`;

const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary || "#FFC107"};
  color: ${(props) => props.theme.colors.textPrimary || "#000000"};
  border: none;
  border-radius: ${(props) => props.theme.borders.radius.small || "8px"};
  padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.typography.fontSizes.medium};
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary || "#0056b3"};
    color: ${(props) => props.theme.colors.textSecondary || "#FFFFFF"};
  }
`;

const CartModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleIncrement = (id: number) => dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  const handleDecrement = (id: number) => dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  const handleRemove = (id: number) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const navigateToCheckout = () => {
    navigate('/checkout')
    onClose();
  }; 
  const totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return isOpen ? (
    <CartModalContainer>
      <CartTable>
      {state.items.map((item) => (
  <div className="cart-item" key={item.id}>
    <div className="product-info">
      <img src={item.image} alt={item.name} /> {/* Access the image property */}
      <div className="details">
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
    <div>
      <QuantityButton onClick={() => handleDecrement(item.id)} disabled={item.quantity <= 1}>
        -
      </QuantityButton>
      <span>{item.quantity}</span>
      <QuantityButton onClick={() => handleIncrement(item.id)}>+</QuantityButton>
      <QuantityButton onClick={() => handleRemove(item.id)}>Remove</QuantityButton>
    </div>
  </div>
))}
      </CartTable>
      <TotalSection>Total: ${totalAmount.toFixed(2)}</TotalSection>
      <CheckoutButton onClick={navigateToCheckout}>Checkout</CheckoutButton>
    </CartModalContainer>
  ) : null;
};

export default CartModal;
