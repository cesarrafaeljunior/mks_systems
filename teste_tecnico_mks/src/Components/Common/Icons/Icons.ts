import styled from "styled-components";
import { IIconsComponent } from "../../../Interfaces/Components";

const IconStyled = styled.figure<IIconsComponent>`
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: ${({ width }) => `${width}`};
    height: ${({ height }) => `${height}`};
    color: ${({ color }) => `${color}`};
    background-color: ${({ backgroundcolor }) => `${backgroundcolor}`};
    object-fit: cover;
  }
`;

export { IconStyled };
