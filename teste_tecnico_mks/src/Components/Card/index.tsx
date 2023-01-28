import { IPropsChildren } from "../../Interfaces/Props";

const Card = ({ children }: IPropsChildren) => {
  return (
    <li>
      <img src="" alt="" />
      {children}
    </li>
  );
};

export { Card };
