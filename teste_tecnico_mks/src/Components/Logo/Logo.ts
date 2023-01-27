import styled from "styled-components";

const fontSizeLogo = "32px";
const fontSizeSubLogo = "16px";

const LogoStyled = styled.h1`
  color: var(--white);

  font-weight: var(--fontWeSemiBold);
  font-size: ${fontSizeLogo};
`;

const SubLogoStyled = styled.h2`
  color: var(--white);

  font-weight: var(--fontWeLight);
  font-size: ${fontSizeSubLogo};

  margin-top: 0.5em;
`;

export { LogoStyled, SubLogoStyled };
