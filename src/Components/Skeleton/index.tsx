import { IPropsSkeleton } from "../../interfaces/propsInterface";
import { SkeletonStyled } from "./skeletonStyle";

const Skeleton = ({ width, height, borderRadius }: IPropsSkeleton) => {
  return (
    <SkeletonStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
    ></SkeletonStyled>
  );
};

export { Skeleton };
