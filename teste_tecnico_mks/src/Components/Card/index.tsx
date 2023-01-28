import { IPropsChildren } from "../../Interfaces/Props";
import AppleWatch from "../../assets/apple-watch.png";
import { CardStyled } from "./Card";

const Card = ({ children }: IPropsChildren) => {
  return (
    <CardStyled>
      <div className="box__img">
        <img src={AppleWatch} alt="Apple" />
      </div>
      {children}
    </CardStyled>
  );
};

export { Card };
