import styled from "styled-components";

const fontSiCart = "1.5em";

const CartStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

  width: 85%;
  max-width: 486px;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;

  padding: 1.5em 0;

  background-color: var(--colorPrimary);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  animation: cartAnimation 0.5s forwards;

  .title__cart {
    width: 90%;

    color: var(--white);

    font-weight: var(--fontWeBold);
    font-size: ${fontSiCart};
    text-align: left;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    width: 100%;
    height: 100%;

    padding: 1.5em;

    overflow-y: auto;
  }

  .box__subtotal {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;

    width: 100%;
    margin-bottom: -1.5em;

    .box__informations__subtotal {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding: 0 1.5em;

      color: var(--white);

      font-size: 24px;
      font-weight: var(--fontWeBold);
    }
    button {
      width: 100%;
      height: 90px;

      background-color: var(--black);
      color: var(--white);

      font-size: 28px;
      font-weight: var(--fontWeBold);

      transition: ease-in-out 0.4s;

      &:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }

  @keyframes cartAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  z-index: 2;
`;

export { CartStyled };
