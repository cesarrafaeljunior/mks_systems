import { IPropsProductInformations } from "../../../../interfaces/propsInterface";
import { PriceProductStyled } from "./priceStyle";

const PriceProduct = ({ priceProduct }: IPropsProductInformations) => {
  return <PriceProductStyled>{priceProduct}</PriceProductStyled>;
};

export { PriceProduct };
