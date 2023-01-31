import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;

  width: 100%;
  height: 1em;

  padding: 1.8em 1.2em;

  background-color: var(--colorPrimary);
  @media (min-width: 768px) {
    padding: 1.8em 3em;
  }

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

export { HeaderStyled };
