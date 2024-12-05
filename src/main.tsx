import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import Home from './pages/Home/Home.tsx'
import Checkout from './pages/Checkout/Checkout.tsx'
import PaymentPage from './pages/Payment/Payment.tsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <LayoutMain />,
  children: [
    { index: true, element: <Home /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/payment", element: <PaymentPage /> }
  ]
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
