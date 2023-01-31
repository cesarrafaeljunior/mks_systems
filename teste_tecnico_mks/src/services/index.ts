import { getProducts } from "../services/axios/request/getProducts";
import {
  addProductInCart,
  decrementQuantityProductInCart,
  incrementQuantityProductInCart,
  removeProductInCart,
} from "../services/cart/productsServices";
export {
  getProducts,
  addProductInCart,
  decrementQuantityProductInCart,
  incrementQuantityProductInCart,
  removeProductInCart,
};
