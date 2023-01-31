import styled from "styled-components";

const QuantitySyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 100%;
  height: 34.5px;

  border: solid 1px var(--greyScale2);
  border-radius: 4px;

  font-weight: 400;

  .quantity__product {
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 0.8em;
  }

  button {
    &:hover {
      color: var(--greyScale2);
    }
  }

  .button__minus {
    display: flex;
    align-items: center;

    height: 70%;

    padding: 5px 10px;

    background: none;
    border-right: solid 1px var(--greyScale2);

    font-size: 1.5em;
    font-weight: 500;
  }

  .button__more {
    display: flex;
    align-items: center;

    height: 70%;
    padding: 5px 10px;

    background: none;
    border-left: solid 1px var(--greyScale2);

    font-size: 1.4em;
    font-weight: 500;
  }
`;

export { QuantitySyled };
