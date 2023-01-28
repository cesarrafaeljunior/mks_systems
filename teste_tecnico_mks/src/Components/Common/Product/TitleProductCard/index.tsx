import { IPropsProductInformations } from "../../../../Interfaces/Props";
import { TitleProductStyled } from "./Title";

const TitleProduct = ({ nameProduct }: IPropsProductInformations) => {
  return <TitleProductStyled>{nameProduct}</TitleProductStyled>;
};

export { TitleProduct };
