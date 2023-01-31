import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../Interfaces/Products";
import { IShowcaseState } from "../../Interfaces/Slices";

const initialState: IShowcaseState = { items: [], loading: true };

const showCaseSlice = createSlice({
  name: "showCase",
  initialState,
  reducers: {
    loadingReducer(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    addProductsToShowCase(state, { payload }: PayloadAction<IProducts[]>) {
      const newState = payload.map((elem) => elem);
      state.items = newState;
    },
  },
});

export const { addProductsToShowCase, loadingReducer } = showCaseSlice.actions;

export default showCaseSlice.reducer;
