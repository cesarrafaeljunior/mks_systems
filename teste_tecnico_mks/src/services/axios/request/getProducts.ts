import { IProducts } from "../../../Interfaces/Products";
import { instaceAxios } from "../Instance";

const getProducts = async (): Promise<IProducts[]> => {
  const { data } = await instaceAxios.get("products", {
    params: {
      page: 1,
      rows: 8,
      sortBy: "id",
      orderBy: "ASC",
    },
  });
  return data.products;
};

export { getProducts };
