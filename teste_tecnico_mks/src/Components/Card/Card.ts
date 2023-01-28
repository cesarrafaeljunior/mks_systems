import styled from "styled-components";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  max-width: 251px;

  padding: 1.2em;

  background-color: var(--white);

  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  .box__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    margin-bottom: 6px;
  }
`;

export { CardStyled };
