import { IoMdCart } from "react-icons/io";
import { ButtonStyled } from "../Common/Buttons/Buttons";
import { DivFlex } from "../Common/Divs/DivFlex";
import { IconStyled } from "../Common/Icons/Icons";
import { Logo, SubLogo } from "../Logo";
import { HeaderStyled } from "./Header";

const Header = () => {
  return (
    <HeaderStyled>
      <DivFlex alignItems="center" gap="0.5em">
        <Logo nameLogo="MKS" />
        <SubLogo nameSubLogo="Sistemas" />
      </DivFlex>
      <ButtonStyled
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        height="1.9em"
        padding="0.7em"
        backgroundcolor="white"
        borderRadius="8px"
        bordercolor="white"
        color="black"
        fontSize="1.2em"
        fontWeigth="fontWeSemiBold"
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
