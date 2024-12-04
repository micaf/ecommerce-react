import styled from "styled-components";
import { useCart } from "../../../context/CartContext";
import { Product } from "../../../interface";

const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary || "#007BFF"}; /* Blue background */
  color: ${(props) => props.theme.colors.textPrimary || "#FFFFFF"}; /* White text */
  border-radius: ${(props) => props.theme.borders.radius.large || "16px"};
  width: 250px;
  text-align: center;
  padding: ${(props) => props.theme.spacing.medium || "16px"};
  box-shadow: ${(props) => props.theme.shadows.medium || "0px 4px 8px rgba(0, 0, 0, 0.2)"};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) => props.theme.shadows.large || "0px 8px 16px rgba(0, 0, 0, 0.3)"};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: ${(props) => props.theme.spacing.small || "8px"};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSizes.large || "18px"};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold || 700};
  margin-bottom: ${(props) => props.theme.spacing.small || "8px"};
`;

const CardDetails = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.medium || "14px"};
  margin: 0 0 ${(props) => props.theme.spacing.small || "8px"};
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary || "#FFC107"}; /* Bright yellow */
  color: ${(props) => props.theme.colors.iconColor || "#000000"}; /* Black text */
  border: none;
  border-radius: ${(props) => props.theme.borders.radius.medium || "8px"};
  padding: ${(props) => props.theme.spacing.small || "8px 16px"};
  font-size: ${(props) => props.theme.typography.fontSizes.medium || "14px"};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold || 700};
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.primary || "#0056b3"}; /* Darker blue */
    color: ${(props) => props.theme.colors.textSecondary || "#FFFFFF"}; /* White text */
  }
`;

const CardProduct = ({ product }: { product: Product }) => {
  const { dispatch } = useCart();

  const { id, name, type, price, image } = product; // Destructure product properties

  const onAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        name,
        price,
        image,
        quantity: 1, // Initial quantity
      },
    });
  };

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <CardTitle>{name}</CardTitle>
      <CardDetails>{type}</CardDetails>
      <CardDetails>${price.toFixed(2)}</CardDetails>
      <Button onClick={onAddToCart}>ADD TO CART</Button>
    </CardContainer>
  );
};

export default CardProduct;