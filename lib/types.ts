export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: boolean;
};

export type CartItem = Product & {
  quantity: number;
};
