import { useSelector } from "react-redux";
import { IProducts } from "../../Interfaces/Products";
import { IPropsChildren } from "../../Interfaces/Props";
import { ICartState } from "../../Interfaces/Slices";
import { DivFlex } from "../Common/Divs/DivFlex";
import { CartStyled } from "./Cart";

const Cart = ({ children }: IPropsChildren) => {
  const itemsCart = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const subTotal = itemsCart.reduce((acc: number, elem: any) => {
    return elem.price * elem.amount + acc;
  }, 0);

  return (
    <CartStyled>
      <h2 className="title__cart">Carrinho de compras</h2>
      <ul> {children}</ul>
      <section className="box__subtotal">
        <div className="box__informations__subtotal">
          <h2>Total:</h2>
          <p>{`R$${subTotal}`}</p>
        </div>

        <button>Finalizar Compra</button>
      </section>
    </CartStyled>
  );
};

export { Cart };
