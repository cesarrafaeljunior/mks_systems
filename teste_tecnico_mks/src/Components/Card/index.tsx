import { IPropsChildren } from "../../Interfaces/Props";
import { CardStyled } from "./Card";

const Card = ({ children, className, imgProduct }: IPropsChildren) => {
  return (
    <CardStyled className={className}>
      <div className="box__img">
        <img src={imgProduct} alt={imgProduct} />
      </div>
      {children}
    </CardStyled>
  );
};

export { Card };
