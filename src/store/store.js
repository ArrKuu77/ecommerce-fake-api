import { configureStore } from "@reduxjs/toolkit";
import { ItemDetailApiService } from "./service/apiService";

export const store = configureStore({
  reducer: {
    [ItemDetailApiService.reducerPath]: ItemDetailApiService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ItemDetailApiService.middleware),
});
export default store;
