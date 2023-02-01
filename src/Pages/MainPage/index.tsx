import { useEffect } from "react";
import { RiShoppingBag3Line as ShoppingBag } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import { Card } from "../../Components/Card";
import { Cart } from "../../Components/Cart";
import { ButtonStyled } from "../../Components/Common/Buttons/buttoStyle";
import { DivFlex } from "../../Components/Common/Divs/divFlexStyle";
import { IconStyled } from "../../Components/Common/Icons/iconStyles";
import { DescriptionProduct } from "../../Components/Common/Product/DescriptionProducts";
import { PriceProduct } from "../../Components/Common/Product/PriceProduct";
import { QuantityProduct } from "../../Components/Common/Product/QuantityProduct";
import { TitleProduct } from "../../Components/Common/Product/TitleProductCard";
import { Footer } from "../../Components/Footer";
import { SectionFooter } from "../../Components/Footer/footerStyle";
import { List } from "../../Components/List";
import { Main } from "../../Components/Main";
import { Skeleton } from "../../Components/Skeleton";
import { ICartState, IShowcaseState } from "../../interfaces/slicesInterface";
import { IProducts } from "../../interfaces/productsInterface";
import {
  addProductsToShowCase,
  loadingReducer,
  addProductReducer,
  openCart,
  removeProductReducer,
  updateProductReducer,
} from "../../redux/index";
import {
  getProducts,
  addProductInCart,
  decrementQuantityProductInCart,
  incrementQuantityProductInCart,
  removeProductInCart,
} from "../../services/index";

const MainPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: { showCase: IShowcaseState }) => state.showCase.items
  );

  const loading = useSelector(
    (state: { showCase: IShowcaseState }) => state.showCase.loading
  );

  const isOpen = useSelector((state: { cart: ICartState }) => state.cart.open);

  const itemsCart = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const addProduct = (product: IProducts) => {
    const newProduct: IProducts | undefined = addProductInCart(
      product,
      itemsCart
    );

    if (newProduct) {
      dispatch(addProductReducer(newProduct));
    }
  };

  const updateProductIncrement = (product: IProducts) => {
    const updateProduct: IProducts | undefined = incrementQuantityProductInCart(
      product,
      itemsCart
    );

    if (updateProduct) {
      dispatch(updateProductReducer(updateProduct));
    }
  };

  const updateProductDecrement = (product: IProducts) => {
    const updateProduct: IProducts | undefined = decrementQuantityProductInCart(
      product,
      itemsCart
    );
    if (updateProduct) {
      if (!updateProduct.amount) {
        dispatch(removeProductReducer(updateProduct));
      }
      dispatch(updateProductReducer(updateProduct));
    }
  };

  const removeProduct = (id: string) => {
    const productToRemove = removeProductInCart(id, itemsCart);

    if (productToRemove) {
      dispatch(removeProductReducer(productToRemove));
    }
  };

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const data = await getProducts();
        dispatch(addProductsToShowCase(data));
        dispatch(loadingReducer(false));
      } catch (err) {
        return err;
      }
    };

    dataRequest();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Main>
          <DivFlex alignItems="center" justifyContent="center">
            <List>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((elem: number) => {
                return <Skeleton key={elem} width="240px" height="378px" />;
              })}
            </List>
          </DivFlex>
        </Main>
        <SectionFooter>
          <Skeleton width="100%" height="40px" />;
        </SectionFooter>
      </>
    );
  }

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
                <Card
                  className="media__desktop"
                  imgProduct={elem.photo}
                  key={elem.id}
                  altImg={elem.name}
                >
                  <ButtonStyled
                    fontSize="25px"
                    fontWeigth="fontWeMedium"
                    position="absolute"
                    top="0.2em"
                    right="0.5em"
                    onClick={() => removeProduct(elem.id)}
                  >
                    X
                  </ButtonStyled>
                  <TitleProduct nameProduct={elem.name} />

                  <DivFlex
                    alignItems="center"
                    justifyContent="center"
                    gap="30px"
                  >
                    <QuantityProduct
                      updateProductIncrement={() =>
                        updateProductIncrement(elem)
                      }
                      updateProductDecrement={() =>
                        updateProductDecrement(elem)
                      }
                    >
                      {elem.amount}
                    </QuantityProduct>
                    <PriceProduct priceProduct={`R$${elem.price}`} />
                  </DivFlex>
                </Card>
              ))
            : null}
        </Cart>
      )}
      <Header />
      <Main>
        <DivFlex alignItems="center" justifyContent="center">
          <List>
            {products.map((elem: IProducts) => {
              return (
                <Card imgProduct={elem.photo} key={elem.id} altImg={elem.name}>
                  <DivFlex alignItems="center" justifyContent="space-between">
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
                    onClick={() => addProduct(elem)}
                  >
                    <IconStyled width="25px" height="22px" color="white">
                      <ShoppingBag className="icon" />
                    </IconStyled>
                    Comprar
                  </ButtonStyled>
                </Card>
              );
            })}
          </List>
        </DivFlex>
      </Main>
      <SectionFooter>
        <Footer />
      </SectionFooter>
    </>
  );
};
export { MainPage };
