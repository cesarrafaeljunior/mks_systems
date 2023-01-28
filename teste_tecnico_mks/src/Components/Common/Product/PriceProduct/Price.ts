import styled from "styled-components";

const fontSiPriceProduct = "0.9em";

const PriceProductStyled = styled.p`
  width: max-content;
  height: max-content;
  padding: 0.5em 0.9em;

  border-radius: 5px;

  background-color: var(--greyScale4);
  color: var(--white);

  font-weight: var(--fontWeBold);
  font-size: ${fontSiPriceProduct};

  text-align: center;
`;

export { PriceProductStyled };
