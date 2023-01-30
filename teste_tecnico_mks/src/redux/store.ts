import { configureStore, combineReducers } from "@reduxjs/toolkit";
import showCaseReducer from "./Slices/showCaseSlice";
import cartReducer from "./Slices/cartSlice";

const rootReducer = combineReducers({
  showCase: showCaseReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default store;
