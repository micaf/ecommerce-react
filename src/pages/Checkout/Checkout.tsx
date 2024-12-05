import styled from "styled-components";
import CheckoutForm from "../../components/ui/CheckoutForm/CheckoutForm";
import ProductsList from "../../components/ui/ProductList/ProductList";

const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large};
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <ProductsList />
      <CheckoutForm />
    </CheckoutContainer>
  );
};

export default Checkout;
