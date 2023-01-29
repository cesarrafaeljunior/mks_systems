import { IPropsChildren } from "../../Interfaces/Props";
import AppleWatch from "../../assets/apple-watch.png";
import { CardStyled } from "./Card";

const Card = ({ children, className }: IPropsChildren) => {
  return (
    <CardStyled className={className}>
      <div className="box__img">
        <img src={AppleWatch} alt="Apple" />
      </div>
      {children}
    </CardStyled>
  );
};

export { Card };
