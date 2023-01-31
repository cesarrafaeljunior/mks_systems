import { IProducts } from "./Products";

export type IShowcaseState = {
  items: IProducts[];
  loading: boolean;
};

export interface ICartState {
  items: IProducts[];
  open: boolean;
}
