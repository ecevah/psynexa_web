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

const psycApi = createApi({
  reducerPath: "psyc",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ["Psyc"],
  endpoints(builder) {
    return {
      fetchPsyc: builder.query({
        providesTags: ["Psyc"],
        query: () => {
          return {
            url: `/api/psyc/list?psyc_id=${getIdFromAnotherPlace()}`,
            method: "GET",
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      addPsyc: builder.mutation({
        invalidaPsycTags: () => {
          return [{ type: "Psyc" }];
        },
        query: (body) => {
          return {
            url: "/api/psyc/create",
            method: "POST",
            body,
            headers: {
              "x-access-token": getTokenFromAnotherPlace(),
            },
          };
        },
      }),
      loginPsyc: builder.mutation({
        invalidaPsycTags: () => {
          return [{ type: "Psyc" }];
        },
        query: (body) => {
          return {
            url: "/api/psyc/login",
            method: "POST",
            body,
          };
        },
      }),
      getPsyc: builder.query({
        providesTags: ["Psyc"],
        query: () => {
          return {
            url: `/api/psyc/find/${getIdFromAnotherPlace()}`,
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
  useFetchPsycQuery,
  useAddPsycMutation,
  useLoginPsycMutation,
  useGetPsycQuery,
} = psycApi;
export { psycApi };
