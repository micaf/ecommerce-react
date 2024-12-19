import { Product } from "../interface";

export const getProducts = async (
    page: number = 1
  ): Promise<{ data: Product[]; total: number }> => {
    const response = await fetch(
      `http://localhost:4000/products?_page=${page}&_limit=8&_sort=id`
    );
  
    if (!response.ok) throw new Error("Failed to fetch products");
    const total = Number(response.headers.get("x-total-count")); 
    const data = await response.json();
  
    return { data, total }; 
  };