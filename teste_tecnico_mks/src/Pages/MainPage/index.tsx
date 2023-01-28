import { useState } from "react";
import { Card } from "../../Components/Card";
import { DivFlex } from "../../Components/Common/Divs/DivFlex";
import { PriceProduct } from "../../Components/Common/PriceProduct";
import { TitleProduct } from "../../Components/Common/TitleProductCard";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { Main } from "../../Components/Main";
import { instaceAxios } from "../../services/axios/Instance";
import { SectionStyled } from "./Main";

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
              </Card>
            </List>
          </DivFlex>
        </Main>
      </SectionStyled>
    </>
  );
};

export { MainPage };
