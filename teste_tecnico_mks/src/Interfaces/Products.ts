export interface IProducts {
  id: string;
  updatedAt: string;
  brand: string;
  createdAt: string;
  name: string;
  photo: string;
  description: string;
  price: string;
  amount?: number | undefined;
}
