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
  },
});

export const { openCart, addProduct, updateProduct } = cartSlice.actions;

export default cartSlice.reducer;
