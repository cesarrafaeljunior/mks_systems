import { IPropsChildren } from "../../Interfaces/Props";
import { MainStyled } from "./Main";

const Main = ({ children }: IPropsChildren) => {
  return <MainStyled>{children}</MainStyled>;
};

export { Main };
