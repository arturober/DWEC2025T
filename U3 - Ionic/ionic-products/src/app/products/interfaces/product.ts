import { User } from "src/app/auth/interfaces/user";

export interface ProductInsert {
  description: string;
  imageUrl: string;
  price: number;
}

export interface Product extends ProductInsert {
  id: number;
  rating: number;
  creator: User;
}
