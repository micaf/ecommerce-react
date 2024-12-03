import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Home from './pages/Home/Home.tsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <LayoutMain />,
  children: [
    { index: true, element: <Home /> },
    { path: "/cart", element: <Cart /> }
  ]
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
