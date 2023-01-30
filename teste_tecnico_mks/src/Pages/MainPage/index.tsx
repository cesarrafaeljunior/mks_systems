import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { DescriptionProduct } from "../../Components/Common/Product/DescriptionProducts";
import { DivFlex } from "../../Components/Common/Divs/DivFlex";
import { PriceProduct } from "../../Components/Common/Product/PriceProduct";
import { TitleProduct } from "../../Components/Common/Product/TitleProductCard";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { Main } from "../../Components/Main";
import { instaceAxios } from "../../services/axios/Instance";
import { SectionFooter, SectionStyled } from "./Main";
import { ButtonStyled } from "../../Components/Common/Buttons/Button";
import { IconStyled } from "../../Components/Common/Icons/Icons";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Footer } from "../../Components/Footer";
import { Cart } from "../../Components/Cart";
import { QuantityProduct } from "../../Components/Common/Product/QuantityProduct";
import { useDispatch, useSelector } from "react-redux";
import { IProducts } from "../../Interfaces/Products";
import { getProducts } from "../../services/axios/request/getProducts";
import { ICartState, IShowcaseState } from "../../Interfaces/Slices";
import { addProductsToShowCase } from "../../redux/Slices/showCaseSlice";
import {
  addProduct,
  openCart,
  updateProduct,
} from "../../redux/Slices/cartSlice";

const MainPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: { showCase: IShowcaseState }) => state.showCase
  );

  const isOpen = useSelector((state: { cart: ICartState }) => state.cart.open);

  const itemsCart = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const addProductCart = (product: IProducts) => {
    const foundProduct = itemsCart.find((elem) => elem.id == product.id);

    if (!foundProduct) {
      const newProduct = {
        ...product,
        amount: 1,
      };
      dispatch(addProduct(newProduct));
    } else {
      updateFunc(foundProduct);
    }
  };

  const updateFunc = (product: IProducts) => {
    const updateItems = itemsCart.map((elem) => {
      if (elem.id == product.id && elem.amount) {
        const updateProduct: any = {
          ...elem,
          amount: elem.amount + 1,
        };
        return updateProduct;
      }
    });
    const filteredItems = updateItems.filter((item) => item !== undefined);
    const [productUpdate] = filteredItems;
    dispatch(updateProduct(productUpdate));
  };

  console.log(itemsCart);

  const removeFromCart = (id: IProducts) => {};

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const data = await getProducts();
        dispatch(addProductsToShowCase(data));
      } catch (err) {
        return err;
      }
    };

    dataRequest();
  }, []);

  return (
    <>
      {isOpen && (
        <Cart>
          <ButtonStyled
            width="content"
            height="content"
            backgroundcolor="black"
            color="white"
            padding="5px 10px"
            borderRadius="100%"
            textAlign="center"
            fontSize="20px"
            position="absolute"
            top="1.2em"
            right="0.5em"
            bordercolor="black"
            hover="greyScale4"
            onClick={() => {
              dispatch(openCart(isOpen));
            }}
          >
            X
          </ButtonStyled>
          {itemsCart.length > 0
            ? itemsCart.map((elem) => (
                <Card className="media__desktop" imgProduct={elem.photo}>
                  <ButtonStyled
                    fontSize="25px"
                    fontWeigth="fontWeMedium"
                    position="absolute"
                    top="0.2em"
                    right="0.5em"
                  >
                    X
                  </ButtonStyled>
                  <TitleProduct nameProduct={elem.name} />

                  <DivFlex
                    alignItems="center"
                    justifyContent="center"
                    gap="30px"
                  >
                    <QuantityProduct>{elem.amount}</QuantityProduct>
                    <PriceProduct priceProduct={elem.price} />
                  </DivFlex>
                </Card>
              ))
            : null}
        </Cart>
      )}
      <SectionStyled>
        <Header />
      </SectionStyled>
      <SectionStyled>
        <Main>
          <DivFlex alignItems="center" justifyContent="center">
            <List>
              {products.map((elem: IProducts) => {
                return (
                  <Card imgProduct={elem.photo} key={elem.id}>
                    <DivFlex gap="8%">
                      <TitleProduct nameProduct={elem.name} />
                      <PriceProduct priceProduct={`R$${elem.price}`} />
                    </DivFlex>
                    <DescriptionProduct descriptionProduct={elem.description} />
                    <ButtonStyled
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap="0.6em"
                      width="calc(100% + 40px)"
                      margin="4px 0 -20px 0"
                      padding="10px"
                      backgroundcolor="colorPrimary"
                      bordercolor="colorPrimary"
                      color="white"
                      borderRadius="0 0 8px 8px"
                      fontSize="1.1em"
                      fontWeigth="fontWeSemiBold"
                      hover="colorPrimaryHover"
                      onClick={() => addProductCart(elem)}
                    >
                      <IconStyled width="25px" height="22px" color="white">
                        <RiShoppingBag3Line className="icon" />
                      </IconStyled>
                      Comprar
                    </ButtonStyled>
                  </Card>
                );
              })}
            </List>
          </DivFlex>
        </Main>
      </SectionStyled>
      <SectionFooter>
        <Footer />
      </SectionFooter>
    </>
  );
};
export { MainPage };
