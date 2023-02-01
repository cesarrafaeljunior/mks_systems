import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../interfaces/productsInterface";
import { ICartState } from "../../interfaces/slicesInterface";

const initialState: ICartState = { items: [], open: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state, { payload }: PayloadAction<boolean>) {
      state.open = !payload;
    },
    addProductReducer(state, { payload }: PayloadAction<IProducts>) {
      state.items.push(payload);
    },
    updateProductReducer(state, { payload }: PayloadAction<IProducts>) {
      const newState = state.items.map((elem: IProducts) => {
        if (elem.id === payload.id) {
          return {
            ...elem,
            amount: payload.amount,
          };
        }

        return elem;
      });
      return { ...state, items: newState };
    },
    removeProductReducer(state, { payload }: PayloadAction<IProducts>) {
      const newState = state.items.filter(
        (elem: IProducts) => elem.id !== payload.id
      );
      return { ...state, items: newState };
    },
    checkout(state, { payload }: PayloadAction<any>) {
      const newState = state.items.filter((elem: any) => elem !== elem);
      state.items = newState;
    },
  },
});

export const {
  openCart,
  addProductReducer,
  updateProductReducer,
  removeProductReducer,
  checkout,
} = cartSlice.actions;

export default cartSlice.reducer;
