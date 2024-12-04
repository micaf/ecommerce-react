import { Product } from "./product";

export interface CartItem extends Pick<Product, 'id' | 'name' | 'price' | 'image'> {
    quantity: number; 
  }