import styled from "styled-components";
import { useCart } from "../../../context/CartContext";

const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  border: 1px solid ${(props) => props.theme.colors.border || "#E0E0E0"};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borders.radius.medium};
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border || "#E0E0E0"};
  padding: ${(props) => props.theme.spacing.small} 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: ${(props) => props.theme.borders.radius.small};
    object-fit: cover;
  }

  .details {
    flex: 1;
    margin-left: ${(props) => props.theme.spacing.small};
  }
`;

const Total = styled.div`
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  text-align: right;
`;

const ProductsList = () => {
  const { state } = useCart();
  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <ProductsListContainer>
      <h3>Products Acquired</h3>
      {state.items.map((item) => (
        <ProductRow key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </ProductRow>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
    </ProductsListContainer>
  );
};

export default ProductsList;
