"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/users_api";
import cardRecucer from "./control/cartSlice";

export const store = configureStore({
  reducer: {
    card: cardRecucer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useRemoveUsersMutation,
  useAddUsersMutation,
} from "./apis/users_api";
