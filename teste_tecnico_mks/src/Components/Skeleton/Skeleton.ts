import styled from "styled-components";
import { IPropsSkeleton } from "../../Interfaces/Props";

const SkeletonStyled = styled.div<IPropsSkeleton>`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};

  border-radius: ${({ borderRadius }) => `${borderRadius}`};

  background-image: linear-gradient(
    -90deg,
    var(--white) 0%,
    var(--greyScale2) 50%,
    var(--white) 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -140% 0%;
    }
  }
`;

export { SkeletonStyled };
