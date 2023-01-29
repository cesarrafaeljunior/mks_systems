import styled from "styled-components";

const QuantitySyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50%;
  height: 34.5px;

  border: solid 1px var(--greyScale2);
  border-radius: 4px;

  font-weight: 400;

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
