import { IPropsChildren } from "../../interfaces/propsInterface";
import { ListStyled } from "./listStyle";

const List = ({ children }: IPropsChildren) => {
  return <ListStyled>{children}</ListStyled>;
};

export { List };
