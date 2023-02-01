import { IPropsProductInformations } from "../../../../interfaces/propsInterface";
import { DescriptionProductStyled } from "./descriptionStyle";

const DescriptionProduct = ({
  descriptionProduct,
}: IPropsProductInformations) => {
  return (
    <DescriptionProductStyled>{descriptionProduct}</DescriptionProductStyled>
  );
};

export { DescriptionProduct };
