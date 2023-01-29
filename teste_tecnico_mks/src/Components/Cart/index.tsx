import { IPropsChildren } from "../../Interfaces/Props";
import { CartStyled } from "./Cart";

const Cart = ({ children }: IPropsChildren) => {
  return (
    <CartStyled>
      <h2 className="title__cart">Carrinho de compras</h2>
      {children}
    </CartStyled>
  );
};

export { Cart };
