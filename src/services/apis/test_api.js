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

const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ["Test"],
  endpoints(builder) {
    return {
      fetchTest: builder.query({
        providesTags: ["test"],
        query: () => {
          return {
            url: `/api/test/list?psyc_id=${getIdFromAnotherPlace()}`,
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      addTest: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Test" }];
        },
        query: (body) => {
          return {
            url: "/api/test/create",
            method: "POST",
            body,
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
    };
  },
});

export const { useFetchTestQuery, useAddTestMutation } = testApi;
export { testApi };
