import { IPropsProductInformations } from "../../../../interfaces/propsInterface";
import { TitleProductStyled } from "./titleStyle";

const TitleProduct = ({ nameProduct }: IPropsProductInformations) => {
  return <TitleProductStyled>{nameProduct}</TitleProductStyled>;
};

export { TitleProduct };
