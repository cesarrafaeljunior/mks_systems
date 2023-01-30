import { IProducts } from "./Products";

export type IShowcaseState = [] | any;

export interface ICartState {
  items: IProducts[];
  open: boolean;
}
