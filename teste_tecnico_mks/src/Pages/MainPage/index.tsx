import { useState } from "react";
import { Header } from "../../Components/Header";
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
    <SectionStyled>
      <Header />
    </SectionStyled>
  );
};

export { MainPage };
