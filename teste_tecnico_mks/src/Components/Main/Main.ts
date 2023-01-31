import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 5%;

  margin-top: 1.2em;

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

export { MainStyled };
