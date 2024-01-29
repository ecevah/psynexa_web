import { TOKEN, URL } from "@/constant/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getTokenFromAnotherPlace = () => {
  const token = TOKEN;
  return token;
};

const getIdFromAnotherPlace = () => {
  const id = "65a8264e2164884ef2f753a9";
  return id;
};

const reservationsApi = createApi({
  reducerPath: "reservations",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ["Reservations"],
  endpoints(builder) {
    return {
      fetchReservations: builder.query({
        providesTags: ["Reservations"],
        query: () => {
          return {
            url: "/api/client/clients",
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      addReservations: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Reservation" }];
        },
        query: (body) => {
          return {
            url: "/api/reservation/add",
            method: "POST",
            body,
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      removeReservations: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Reservation" }];
        },
        query: (user) => {
          return {
            url: `/api/client/delete/${user.id}`,
            method: "DELETE",
            body: {
              name: "Can",
            },
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      fetchAfterReservations: builder.query({
        providesTags: ["Reservations"],
        query: (psyc) => {
          return {
            url: `/api/reservation/after?psyc_id=${getIdFromAnotherPlace()}`,
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      fetchBeforeReservations: builder.query({
        providesTags: ["Reservations"],
        query: (psyc) => {
          return {
            url: `/api/reservation/before?psyc_id=${getIdFromAnotherPlace()}`,
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      fetchResponseReservations: builder.query({
        providesTags: ["Reservations"],
        query: (reservation) => {
          return {
            url: `/api/talk/find/reservation?id=${reservation}`,
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchReservationsQuery,
  useAddReservationsMutation,
  useRemoveReservationsMutation,
  useFetchAfterReservationsQuery,
  useFetchBeforeReservationsQuery,
  useFetchResponseReservationsQuery,
} = reservationsApi;
export { reservationsApi };
