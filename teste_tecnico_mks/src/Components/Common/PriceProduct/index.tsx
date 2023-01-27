import { IPropsProductInformations } from "../../../Interfaces/Props";
import { PriceProductStyled } from "./Price";

const PriceProduct = ({ priceProduct }: IPropsProductInformations) => {
  return <PriceProductStyled>{priceProduct}</PriceProductStyled>;
};

export { PriceProduct };
