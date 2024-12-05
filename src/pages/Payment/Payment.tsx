import { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useForm } from "react-hook-form";

const PaymentPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [focused, setFocused] = useState<Focused | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Payment Data:", data);
    setSubmitted(true);
  };

  const cardNumber = watch("number", "");
  const cardName = watch("name", "");
  const cardExpiry = watch("expiry", "");
  const cardCVC = watch("cvc", "");

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h1>Mock Payment Page</h1>

      <Cards
        number={cardNumber}
        name={cardName}
        expiry={cardExpiry}
        cvc={cardCVC}
        focused={focused}
      />

      {!submitted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            {...register("number", {
              required: "Card number is required",
              pattern: {
                value: /^[0-9]{16}$/,
                message: "Invalid card number (16 digits required)",
              },
            })}
            type="text"
            placeholder="Card Number"
            maxLength={16}
            onFocus={() => setFocused("number")}
          />
          {errors.number?.message && (
            <span style={{ color: "red" }}>
              {typeof errors.number.message === "string"
                ? errors.number.message
                : "Invalid input"}
            </span>
          )}

          <input
            {...register("name", {
              required: "Cardholder name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            type="text"
            placeholder="Cardholder Name"
            onFocus={() => setFocused("name")}
          />
          {errors.name?.message && (
            <span style={{ color: "red" }}>
              {typeof errors.name.message === "string"
                ? errors.name.message
                : "Invalid input"}
            </span>
          )}

          <input
            {...register("expiry", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                message: "Invalid expiry format (MM/YY required)",
              },
            })}
            type="text"
            placeholder="Expiry (MM/YY)"
            maxLength={5}
            onFocus={() => setFocused("expiry")}
          />
          {errors.expiry?.message && (
            <span style={{ color: "red" }}>
              {typeof errors.expiry.message === "string"
                ? errors.expiry.message
                : "Invalid input"}
            </span>
          )}

          <input
            {...register("cvc", {
              required: "CVC is required",
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: "Invalid CVC (3-4 digits required)",
              },
            })}
            type="text"
            placeholder="CVC"
            maxLength={4}
            onFocus={() => setFocused("cvc")}
          />
          {errors.cvc?.message && (
            <span style={{ color: "red" }}>
              {typeof errors.cvc.message === "string"
                ? errors.cvc.message
                : "Invalid input"}
            </span>
          )}

          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
            Pay Now
          </button>
        </form>
      ) : (
        <div>
          <h2>Payment Successful!</h2>
          <p>Your payment was processed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
