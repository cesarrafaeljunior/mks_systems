import { IProducts } from "../../interfaces/productsInterface";

const addProductInCart = (product: IProducts, itemsCart: IProducts[]) => {
  const foundProduct = itemsCart.find((elem) => elem.id == product.id);

  if (!foundProduct) {
    const newProduct: IProducts = {
      ...product,
      amount: 1,
    };
    return newProduct;
  }
  console.log("Este item já está na lista");
};

const incrementQuantityProductInCart = (
  product: IProducts,
  itemsCart: IProducts[]
): IProducts | undefined => {
  const foundProductInCart: IProducts | undefined = itemsCart.find(
    (elem) => elem.id == product.id
  );

  if (foundProductInCart) {
    const updateProductFounded = {
      ...foundProductInCart,
      amount: (foundProductInCart.amount || 0) + 1,
    };
    return updateProductFounded;
  }
};

const decrementQuantityProductInCart = (
  product: IProducts,
  itemsCart: IProducts[]
): IProducts | undefined => {
  const foundProductInCart: IProducts | undefined = itemsCart.find(
    (elem) => elem.id == product.id
  );

  if (foundProductInCart) {
    const updateProductFounded = {
      ...foundProductInCart,
      amount: (foundProductInCart.amount || 0) - 1,
    };

    return updateProductFounded;
  }
};

const removeProductInCart = (id: string, itemsCart: IProducts[]) => {
  const foundProductInCart: IProducts | undefined = itemsCart.find(
    (elem) => elem.id == id
  );
  return foundProductInCart;
};

export {
  addProductInCart,
  incrementQuantityProductInCart,
  decrementQuantityProductInCart,
  removeProductInCart,
};
