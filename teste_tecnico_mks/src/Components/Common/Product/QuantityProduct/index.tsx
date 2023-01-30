import { IPropsChildren } from "../../../../Interfaces/Props";
import { QuantitySyled } from "./Quantity";

const QuantityProduct = ({
  children,
  updateProductIncrement,
  updateProductDecrement,
}: IPropsChildren) => {
  return (
    <QuantitySyled>
      <button onClick={updateProductDecrement} className="button__minus">
        {" "}
        -{" "}
      </button>
      {children}
      <button onClick={updateProductIncrement} className="button__more">
        {" "}
        +{" "}
      </button>
    </QuantitySyled>
  );
};

export { QuantityProduct };
