import styled from "styled-components";

const fontSiCart = "1.5em";

const CartStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;

  width: 85%;
  max-width: 450px;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;

  padding: 1.5em 1.5em;

  background-color: var(--colorPrimary);

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  text-align: center;

  img {
    width: 50%;
  }

  .title__cart {
    text-align: left;
    width: 90%;

    color: var(--white);

    font-weight: var(--fontWeBold);
    font-size: ${fontSiCart};
  }
`;

export { CartStyled };
