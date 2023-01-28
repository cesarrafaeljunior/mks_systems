import { IPropsProductInformations } from "../../../../Interfaces/Props";
import { DescriptionProductStyled } from "./Description";

const DescriptionProduct = ({
  descriptionProduct,
}: IPropsProductInformations) => {
  return (
    <DescriptionProductStyled>{descriptionProduct}</DescriptionProductStyled>
  );
};

export { DescriptionProduct };
