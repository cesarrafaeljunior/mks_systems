import { useSelector } from "react-redux";
import { IShowcaseState } from "../../Interfaces/Slices";
import { Skeleton } from "../Skeleton";
import { LogoStyled, SubLogoStyled } from "./Logo";

interface ILogo {
  nameLogo?: string;
  nameSubLogo?: string;
}

const Logo = ({ nameLogo }: ILogo) => {
  return <LogoStyled>{nameLogo}</LogoStyled>;
};

const SubLogo = ({ nameSubLogo }: ILogo) => {
  return <SubLogoStyled>{nameSubLogo}</SubLogoStyled>;
};

export { Logo, SubLogo };
