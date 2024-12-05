import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  border: 1px solid ${(props) => props.theme.colors.border || "#E0E0E0"};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borders.radius.medium};
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.small};
  border: 1px solid ${(props) => props.theme.colors.border || "#E0E0E0"};
  border-radius: ${(props) => props.theme.borders.radius.small};
`;

const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.error || "#FF5252"};
  font-size: ${(props) => props.theme.typography.fontSizes.small};
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors.primary || "#007BFF"};
  color: ${(props) => props.theme.colors.textPrimary || "#FFFFFF"};
  border: none;
  border-radius: ${(props) => props.theme.borders.radius.medium};
  padding: ${(props) => props.theme.spacing.small};
  font-size: ${(props) => props.theme.typography.fontSizes.medium};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary || "#0056b3"};
  }
`;

interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const navigate = useNavigate();
  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form Data:", data);
    navigate("/payment", { state: { checkoutData: data } });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h3>Checkout Details</h3>
      <label>
        Full Name
        <Input
          {...register("name", { required: "Full Name is required" })}
          type="text"
        />
        {errors.name?.message && (
          <ErrorText>
            {typeof errors.name.message === "string"
              ? errors.name.message
              : "Invalid input"}
          </ErrorText>
        )}
      </label>
      <label>
        Email Address
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          type="email"
        />
        {errors.email?.message && (
          <ErrorText>
            {typeof errors.email.message === "string"
              ? errors.email.message
              : "Invalid input"}
          </ErrorText>
        )}
      </label>
      <label>
        Address
        <Input
          {...register("address", { required: "Address is required" })}
          type="text"
        />
        {errors.address?.message && (
          <ErrorText>
            {typeof errors.address.message === "string"
              ? errors.address.message
              : "Invalid input"}
          </ErrorText>
        )}
      </label>
      <label>
        Phone Number
        <Input
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must contain only digits",
            },
          })}
          type="tel"
        />
        {errors.phone?.message && (
          <ErrorText>
            {typeof errors.phone.message === "string"
              ? errors.phone.message
              : "Invalid input"}
          </ErrorText>
        )}
      </label>
      <SubmitButton type="submit">Place Order</SubmitButton>
    </FormContainer>
  );
};

export default CheckoutForm;
