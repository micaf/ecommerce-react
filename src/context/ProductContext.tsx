import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product } from "../interface";
import { getProducts } from "../service/products.service";

type ProductContextType = {
  products: Product[];
  fetchProducts: () => void;
  isLoading: boolean;
  error: string | null;
};

// Create the context
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null); // Reset error before fetching
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProducts, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
