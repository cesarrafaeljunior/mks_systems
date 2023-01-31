import styled from "styled-components";
import { IButtonComponent } from "../../../interfaces/componentsInterface";

const ButtonStyled = styled.button<IButtonComponent>`
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};

  width: ${({ width }) => `${width}`};
  max-width: ${({ maxWidth }) => `${maxWidth}`};
  height: ${({ height }) => `${height}`};

  align-self: ${({ alignSelf }) => `${alignSelf}`};
  text-align: ${({ textAlign }) => `${textAlign}`};

  position: ${({ position }) => `${position}`};
  top: ${({ top }) => `${top}`};
  right: ${({ right }) => `${right}`};
  left: ${({ left }) => `${left}`};

  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};

  background-color: ${({ backgroundcolor }) => `var(--${backgroundcolor})`};
  border: solid 2px ${({ bordercolor }) => `var(--${bordercolor})`};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};

  color: ${({ color }) => `var(--${color})`};

  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: ${({ fontWeigth }) => `var(--${fontWeigth})`};

  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${({ hover }) => `var(--${hover})`};
    border: solid 2px ${({ hover }) => `var(--${hover})`};
  }
`;

export { ButtonStyled };
