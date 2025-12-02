export interface ProductInsert {
  description: string;
  price: number;
  available: string;
  imageUrl: string;
}

export interface Product extends ProductInsert {
  id: number;
  rating: number;
}
