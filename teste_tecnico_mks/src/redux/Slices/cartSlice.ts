import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartProducts {
  id: string;
  updatedAt: string;
  brand: string;
  createdAt: string;
  name: string;
  photo: string;
  description: string;
  price: string;
}

export interface ICartState {
  items: [] | any;
  isOpen: boolean;
}

const initialState: ICartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, { payload }: PayloadAction<ICartProducts[]>) {
      state.items = [...payload];
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
