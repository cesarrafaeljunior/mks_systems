import { IPropsChildren } from "../../interfaces/propsInterface";
import { MainStyled } from "./mainStyle";

const Main = ({ children }: IPropsChildren) => {
  return <MainStyled>{children}</MainStyled>;
};

export { Main };
