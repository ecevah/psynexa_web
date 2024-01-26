import { URL } from "@/constant/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ["Users"],
        query: () => {
          return {
            url: "/api/client/clients",
            method: "GET",
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwc3ljaG9sb2dpc3QiOnsiX2lkIjoiNjVhODI2NGUyMTY0ODg0ZWYyZjc1M2E5IiwibmFtZSI6IlBzeWMgQWhtZXQiLCJzdXJOYW1lIjoiRWNldml0IiwicGFzcyI6IiQyYSQwOCR1bVpYeTU3VXFudnVmdEZ4emZCNW8uSVN1QUFzNHk5b1BBYU1uR1YwWFRzVGdwakRjZVNMUyIsImVNYWlsIjoiZWVjZXZhaEBnbWFpbC5jb20iLCJ0YWciOlsidXptYW4iXSwiaW1hZ2UiOiJpbWFnZS0xNzA1NTE4NjcwODUwLmpwZWciLCJ1bnZhbiI6ImtsaW5payBwc2lrb2xvaCIsInN0YXIiOltdLCJzdGFyQXZnIjpbXSwiYWN0aXZlIjpmYWxzZSwiYWNjQWN0aXZlIjp0cnVlLCJjcmVhdGVBdCI6IjIwMjQtMDEtMTdUMTk6MTE6MTAuODcyWiIsInVwZGF0ZUF0IjoiMjAyNC0wMS0xN1QxOToxMToxMC44NzJaIiwiX192IjowfSwiaWF0IjoxNzA1NTIwMTM1fQ.ad3WLnfmxtpnob3kSqVRZHtUZuOv8nX-CMkQHHdRth4",
            },
          };
        },
      }),
      addUsers: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (body) => {
          return {
            url: "/api/reservation/add",
            method: "POST",
            body,
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwc3ljaG9sb2dpc3QiOnsiX2lkIjoiNjVhODI2NGUyMTY0ODg0ZWYyZjc1M2E5IiwibmFtZSI6IlBzeWMgQWhtZXQiLCJzdXJOYW1lIjoiRWNldml0IiwicGFzcyI6IiQyYSQwOCR1bVpYeTU3VXFudnVmdEZ4emZCNW8uSVN1QUFzNHk5b1BBYU1uR1YwWFRzVGdwakRjZVNMUyIsImVNYWlsIjoiZWVjZXZhaEBnbWFpbC5jb20iLCJ0YWciOlsidXptYW4iXSwiaW1hZ2UiOiJpbWFnZS0xNzA1NTE4NjcwODUwLmpwZWciLCJ1bnZhbiI6ImtsaW5payBwc2lrb2xvaCIsInN0YXIiOltdLCJzdGFyQXZnIjpbXSwiYWN0aXZlIjpmYWxzZSwiYWNjQWN0aXZlIjp0cnVlLCJjcmVhdGVBdCI6IjIwMjQtMDEtMTdUMTk6MTE6MTAuODcyWiIsInVwZGF0ZUF0IjoiMjAyNC0wMS0xN1QxOToxMToxMC44NzJaIiwiX192IjowfSwiaWF0IjoxNzA1NTIwMTM1fQ.ad3WLnfmxtpnob3kSqVRZHtUZuOv8nX-CMkQHHdRth4",
            },
          };
        },
      }),
      removeUsers: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (user) => {
          return {
            url: `/api/client/delete/${user.id}`,
            method: "DELETE",
            body: {
              name: "Can",
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchUsersQuery,
  useAddUsersMutation,
  useRemoveUsersMutation,
} = usersApi;
export { usersApi };
