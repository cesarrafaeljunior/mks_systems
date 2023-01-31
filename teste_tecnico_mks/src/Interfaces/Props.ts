import { IProducts } from "./Products";

export interface IPropsChildren {
  children: React.ReactNode;
  photo?: string;
}

export interface IPropsCard extends IPropsChildren {
  className?: string;
  imgProduct?: string;
  altImg: string;
}

export interface IPropsProductInformations {
  nameProduct?: string;
  priceProduct?: string;
  descriptionProduct?: string;
}

export interface IPropsQuantityProduct extends IPropsChildren {
  updateProductIncrement?: () => IProducts | void;
  updateProductDecrement?: () => IProducts | void;
}

export interface IPropsSkeleton {
  width: string;
  height: string;
  borderRadius?: string;
}
