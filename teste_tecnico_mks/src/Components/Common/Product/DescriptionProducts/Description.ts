import styled from "styled-components";

const fontSiDescriptionProduc = "0.8em";

const DescriptionProductStyled = styled.p`
  min-height: 90px;
  max-height: 90px;

  color: var(--greyScale3);

  font-size: ${fontSiDescriptionProduc};
  font-weight: var(--fontWeLight);

  text-overflow: ellipsis;
  overflow: hidden;
`;

export { DescriptionProductStyled };
