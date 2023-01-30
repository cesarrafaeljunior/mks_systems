import { IProducts } from "./Products";

export interface IPropsChildren {
  children: React.ReactNode;
  className?: string;
  imgProduct?: string;
  photo?: string;
  updateProductIncrement?: () => IProducts | void;
  updateProductDecrement?: () => IProducts | void;
}

export interface IPropsProductInformations {
  nameProduct?: string;
  priceProduct?: string;
  descriptionProduct?: string;
}
