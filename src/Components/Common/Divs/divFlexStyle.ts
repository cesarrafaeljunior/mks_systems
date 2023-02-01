import styled from "styled-components";
import { IDivFlexComponent } from "../../../interfaces/componentsInterface";

const DivFlex = styled.div<IDivFlexComponent>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};
`;

export { DivFlex };
