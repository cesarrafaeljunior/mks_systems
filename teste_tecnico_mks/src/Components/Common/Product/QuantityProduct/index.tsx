import { IPropsChildren } from "../../../../Interfaces/Props";
import { QuantitySyled } from "./Quantity";

const QuantityProduct = ({ children }: IPropsChildren) => {
  return (
    <QuantitySyled>
      <button className="button__minus"> - </button>
      {children}
      <button className="button__more"> + </button>
    </QuantitySyled>
  );
};

export { QuantityProduct };
