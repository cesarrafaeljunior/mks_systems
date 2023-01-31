import { IPropsSkeleton } from "../../Interfaces/Props";
import { SkeletonStyled } from "./Skeleton";

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
