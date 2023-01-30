import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../Interfaces/Products";
import { ICartState } from "../../Interfaces/Slices";

const initialState: ICartState | any = { items: [], open: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state, { payload }: PayloadAction<boolean>) {
      state.open = !payload;
    },
    addProduct(state, { payload }: PayloadAction<IProducts>) {
      state.items.push(payload);
    },
    updateProduct(state, { payload }: PayloadAction<IProducts>) {
      state.items = state.items.map((elem: any) => {
        if (elem.id === payload.id) {
          return {
            ...elem,
            amount: payload.amount,
          };
        }
        return elem;
      });
    },
    removeProduct(state, { payload }: PayloadAction<IProducts>) {
      state.items.map((elem: IProducts) => {
        if (elem.id == payload.id && elem.amount) {
          elem.amount -= 1;
          return elem;
        }
      });
      const removeProductCart = state.items.filter((elem: IProducts) => {
        if (elem.amount && elem.amount > 0) {
          return elem.amount > 0;
        }
      });
      state.items = removeProductCart;
    },
  },
});

export const { openCart, addProduct, updateProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
