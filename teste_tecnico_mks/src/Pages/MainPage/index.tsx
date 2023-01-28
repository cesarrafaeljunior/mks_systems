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
import { SectionStyled } from "./Main";
import { ButtonStyled } from "../../Components/Common/Buttons/Button";
import { IconStyled } from "../../Components/Common/Icons/Icons";
import { RiShoppingBag3Line } from "react-icons/ri";

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
      <SectionStyled>
        <Header />
      </SectionStyled>
      <SectionStyled>
        <Main>
          <DivFlex alignItems="center" justifyContent="center">
            <List>
              <Card>
                <TitleProduct nameProduct="Apple Watch Series 4 GPS" />
                <PriceProduct priceProduct="R$399" />
                <DescriptionProduct descriptionProduct="Redesign from scratch and completely revised" />
                <ButtonStyled
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.6em"
                  width="100%"
                  padding="10px"
                  backgroundcolor="colorPrimary"
                  color="white"
                  borderRadius="0 0 8px 8px"
                  fontSize="1.1em"
                  fontWeigth="fontWeSemiBold"
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
    </>
  );
};

export { MainPage };
