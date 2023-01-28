import styled from "styled-components";
import { IButtonComponent } from "../../../Interfaces/Components";

const ButtonStyled = styled.button<IButtonComponent>`
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};

  width: ${({ width }) => `${width}`};
  max-width: ${({ maxWidth }) => `${maxWidth}`};
  height: ${({ height }) => `${height}`};

  padding: ${({ padding }) => `${padding}`};

  background-color: ${({ backgroundcolor }) => `var(--${backgroundcolor})`};
  border: solid 2px ${({ bordercolor }) => `var(--${bordercolor})`};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};
  color: ${({ color }) => `var(--${color})`};

  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: ${({ fontWeigth }) => `var(--${fontWeigth})`};

  &:hover {
    background-color: ${({ hover }) => `var(--${hover})`};
    border: solid 2px ${({ hover }) => `var(--${hover})`};
  }
`;

export { ButtonStyled };
