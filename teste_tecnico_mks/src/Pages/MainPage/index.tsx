import { useState } from "react";
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

const MainPage = () => {
  const [productsArray, setProducts] = useState([]);

  // useEffect(() => {
  //   instaceAxios
  //     .get("products", {
  //       params: {
  //         page: 1,
  //         rows: 8,
  //         sortBy: "id",
  //         orderBy: "ASC",
  //       },
  //     })
  //     .then(({ data }) => setProducts(data))
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(productsArray);

  return (
    <>
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
      <SectionStyled>
        <Header />
      </SectionStyled>
      <SectionStyled>
        <Main>
          <DivFlex alignItems="center" justifyContent="center">
            <List>
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
              <Card>
                <DivFlex gap="8%">
                  <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                  <PriceProduct priceProduct="R$399" />
                </DivFlex>
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
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
