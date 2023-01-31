import { SkeletonStyled } from "./Skeleton";

type props = {
  width: number | string;
  height: number | string;
  borderRadius?: number;
};

const Skeleton = ({ width, height, borderRadius }: props) => {
  return (
    <SkeletonStyled style={{ width, height, borderRadius }}></SkeletonStyled>
  );
};

export { Skeleton };
