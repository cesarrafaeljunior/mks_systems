import { IProducts } from "./productsInterface";

export type IShowcaseState = {
  items: IProducts[];
  loading: boolean;
};

export interface ICartState {
  items: IProducts[];
  open: boolean;
}
