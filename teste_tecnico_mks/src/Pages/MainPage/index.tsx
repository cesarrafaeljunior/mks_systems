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
import {
  addItems,
  ICartProducts,
  ICartState,
} from "../../redux/Slices/cartSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );
  console.log(products);
  // const isOpenCard = useSelector(
  //   (state: { cart: ICartState }) => state.cart.isOpen
  // );

  useEffect(() => {
    instaceAxios
      .get("products", {
        params: {
          page: 1,
          rows: 8,
          sortBy: "id",
          orderBy: "ASC",
        },
      })
      .then(({ data }) => {
        dispatch(addItems(data.products));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <>
      {/* {isOpenCard && (
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
          >
            X
          </ButtonStyled>
          <Card className="media__desktop">
            <ButtonStyled
              fontSize="25px"
              fontWeigth="fontWeMedium"
              position="absolute"
              top="0.2em"
              right="0.5em"
            >
              X
            </ButtonStyled>
            <TitleProduct nameProduct="Apple Watch Series 4 gps" />

            <DivFlex alignItems="center" justifyContent="center" gap="30px">
              <QuantityProduct>1</QuantityProduct>
              <PriceProduct priceProduct="R$399" />
            </DivFlex>
          </Card>
        </Cart>
      )} */}

      <SectionStyled>
        <Header />
      </SectionStyled>
      <SectionStyled>
        <Main>
          <DivFlex alignItems="center" justifyContent="center">
            <List>
              {products.map((elem: ICartProducts) => {
                return (
                  <Card imgProduct={elem.photo} key={elem.name}>
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
