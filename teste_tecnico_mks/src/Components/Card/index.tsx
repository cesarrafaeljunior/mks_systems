import { IPropsCard, IPropsChildren } from "../../Interfaces/Props";
import { CardStyled } from "./Card";

const Card = ({ children, className, imgProduct, altImg }: IPropsCard) => {
  return (
    <CardStyled className={className}>
      <div className="box__img">
        <img src={imgProduct} alt={altImg} />
      </div>
      {children}
    </CardStyled>
  );
};

export { Card };
