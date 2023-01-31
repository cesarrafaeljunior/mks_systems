import styled from "styled-components";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  max-width: 240px;

  position: relative;

  padding: 1.2em;

  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  z-index: 1;

  .box__img {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 201.63px;
    min-height: 168.11px;

    margin-bottom: 6px;

    img {
      width: 80%;
      height: 100%;
    }
  }

  &.media__desktop {
    @media (min-width: 768px) {
      flex-direction: row;

      min-width: 100%;
      padding: 35px 20px 35px 0;

      > button {
        top: -10px;
        right: -5px;

        padding: 5px 8px;

        background-color: black;
        border-radius: 50%;
        color: white;

        font-size: 12px;

        &:hover {
          transform: scale(1.1);
          background-color: var(--greyScale4);
        }
      }
      > h2 {
        width: 50%;
        min-height: 0;
      }

      .box__img {
        min-width: 0;
        min-height: 0;
        width: 150px;
        height: 100%;
      }

      div > img {
        width: 50%;
        height: 100%;
      }

      p {
        background: none;
        color: var(--black);
      }

      div {
        gap: 10px;
        > p {
          font-size: 1em;
        }
      }
    }
  }
`;

export { CardStyled };
