import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../Interfaces/Slices";

const initialState: ICartState = { items: [], open: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state, { payload }: PayloadAction<boolean>) {
      state.open = !payload;
    },
  },
});

export const { openCart } = cartSlice.actions;

export default cartSlice.reducer;
