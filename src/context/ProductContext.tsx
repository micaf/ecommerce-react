import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product } from "../interface";
import { getProducts } from "../service/products.service";

type ProductContextType = {
  products: Product[];
  fetchProducts: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start loading initially
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data)); // Persist fetched products
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch products";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      const storedProducts = localStorage.getItem("products");
      if (storedProducts) {
        try {
          const parsedProducts = JSON.parse(storedProducts) as Product[];
          setProducts(parsedProducts); // Use stored products if available
          setIsLoading(false); // No need to fetch if we have data
        } catch {
          await fetchProducts(); // Fetch if parsing fails
        }
      } else {
        await fetchProducts(); // Fetch if no stored products
      }
    };
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProducts, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
