import { IPropsChildren } from "../../Interfaces/Props";
import { ListStyled } from "./List";

const List = ({ children }: IPropsChildren) => {
  return <ListStyled>{children}</ListStyled>;
};

export { List };
