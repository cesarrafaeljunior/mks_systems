import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ICartState, IShowcaseState } from "../../Interfaces/Slices";
import { openCart } from "../../redux/Slices/cartSlice";
import { ButtonStyled } from "../Common/Buttons/Button";
import { DivFlex } from "../Common/Divs/DivFlex";
import { IconStyled } from "../Common/Icons/Icons";
import { Logo, SubLogo } from "../Logo";
import { Skeleton } from "../Skeleton";
import { HeaderStyled } from "./Header";

const Header = () => {
  const dispatch = useDispatch();

  const itemsCart = useSelector(
    (state: { cart: ICartState }) => state.cart.items
  );

  const loading = useSelector(
    (state: { showCase: IShowcaseState }) => state.showCase.loading
  );

  const isOpen = useSelector((state: { cart: ICartState }) => state.cart.open);

  const numberOfItemsOnTheCard = itemsCart.reduce((acc: number, elem: any) => {
    if (elem.amount) {
      return elem.amount + acc;
    }
  }, 0);
  if (loading) {
    return (
      <HeaderStyled style={{ backgroundColor: "var(--greyScale1)" }}>
        <DivFlex alignItems="center" gap="0.5em">
          <h1>
            <Skeleton width={100} height={40} />
          </h1>
          <h2 style={{ marginTop: 10 }}>
            <Skeleton width={100} height={20} />
          </h2>
        </DivFlex>
        <button>
          <Skeleton width={60} height={30} borderRadius={4} />
        </button>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled>
      <DivFlex alignItems="center" gap="0.5em">
        <Logo nameLogo="MKS" />
        <SubLogo nameSubLogo="Sistemas" />
      </DivFlex>
      <ButtonStyled
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
        padding="2px 10px"
        backgroundcolor="white"
        borderRadius="8px"
        bordercolor="white"
        color="black"
        fontSize="1.2em"
        fontWeigth="fontWeSemiBold"
        hover="greyScale2"
        onClick={() => {
          dispatch(openCart(isOpen));
        }}
      >
        <IconStyled width="20px" height="20px" color="black">
          <IoMdCart className="icon" />
        </IconStyled>
        {numberOfItemsOnTheCard}
      </ButtonStyled>
    </HeaderStyled>
  );
};
export { Header };
