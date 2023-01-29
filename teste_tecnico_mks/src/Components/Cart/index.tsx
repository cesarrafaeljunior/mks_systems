import { IPropsChildren } from "../../Interfaces/Props";
import { DivFlex } from "../Common/Divs/DivFlex";
import { CartStyled } from "./Cart";

const Cart = ({ children }: IPropsChildren) => {
  return (
    <CartStyled>
      <h2 className="title__cart">Carrinho de compras</h2>
      <ul> {children}</ul>
      <section className="box__subtotal">
        <div className="box__informations__subtotal">
          <h2>Total:</h2>
          <p>R$798</p>
        </div>

        <button>Finalizar Compra</button>
      </section>
    </CartStyled>
  );
};

export { Cart };
