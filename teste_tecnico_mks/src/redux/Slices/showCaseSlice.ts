import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../Interfaces/Products";
import { IShowcaseState } from "../../Interfaces/Slices";

const showCaseSlice = createSlice({
  name: "showCase",
  initialState: [] as IShowcaseState,
  reducers: {
    addProductsToShowCase(state, { payload }: PayloadAction<IProducts[]>) {
      return [...payload];
    },
  },
});

export const { addProductsToShowCase } = showCaseSlice.actions;

export default showCaseSlice.reducer;
