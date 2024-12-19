import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext";
import { LayoutMain } from "./components/Layouts/LayoutMain";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import PaymentPage from "./pages/Payment/Payment";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/payment", element: <PaymentPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
