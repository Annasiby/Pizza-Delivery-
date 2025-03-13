import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: { pizzas: pizzaReducer },
});
