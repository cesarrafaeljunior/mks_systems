import { ButtonStyled } from "../Common/Buttons/Buttons";
import { DivFlex } from "../Common/Divs/DivFlex";
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
        height="1.6em"
        padding="1em"
        backgroundcolor="white"
        borderRadius="8px"
        bordercolor="white"
        color="black"
        fontSize="0.7"
        fontWeigth="fontWeSemiBold"
      >
        Carrinho
      </ButtonStyled>
    </HeaderStyled>
  );
};
export { Header };
