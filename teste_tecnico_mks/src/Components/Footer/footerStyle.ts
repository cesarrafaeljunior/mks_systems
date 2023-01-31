import styled from "styled-components";

const fontSiFooter = "14px";

const FooterStyled = styled.footer`
  width: 100%;

  background-color: var(--greyScale2);
  padding: 10px;
  text-align: center;

  font-size: ${fontSiFooter};
  font-weight: var(--fontWeRegular);

  animation: entrance 0.3s ease-in;

  @keyframes entrance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SectionFooter = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  text-align: center;

  width: 100%;
  height: 5vh;
`;

export { FooterStyled, SectionFooter };
