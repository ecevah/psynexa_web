"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/users_api";
import cardReducer from "./control/cartSlice";
import controlReducer from "./control/controlSlice";
import { reservationsApi } from "./apis/reservations_api";
import { testApi } from "./apis/test_api.js";
import { psycApi } from "./apis/psyc_api.js";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    control: controlReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [psycApi.reducerPath]: psycApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      usersApi.middleware,
      reservationsApi.middleware,
      testApi.middleware,
      psycApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useRemoveUsersMutation,
  useAddUsersMutation,
} from "./apis/users_api";

export {
  useAddReservationsMutation,
  useFetchReservationsQuery,
  useRemoveReservationsMutation,
  useFetchAfterReservationsQuery,
  useFetchBeforeReservationsQuery,
  useFetchResponseReservationsQuery,
} from "./apis/reservations_api";

export { useAddTestMutation, useFetchTestQuery } from "./apis/test_api.js";

export {
  useAddPsycMutation,
  useFetchPsycQuery,
  useLoginPsycMutation,
  useGetPsycQuery,
} from "./apis/psyc_api.js";
