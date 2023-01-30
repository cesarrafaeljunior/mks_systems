import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ICartState } from "../../Interfaces/Slices";
import { openCart } from "../../redux/Slices/cartSlice";
import { ButtonStyled } from "../Common/Buttons/Button";
import { DivFlex } from "../Common/Divs/DivFlex";
import { IconStyled } from "../Common/Icons/Icons";
import { Logo, SubLogo } from "../Logo";
import { HeaderStyled } from "./Header";

const Header = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: { cart: ICartState }) => state.cart.open);

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
        0
      </ButtonStyled>
    </HeaderStyled>
  );
};
export { Header };
