import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
// import { gatewayPort } from "../../constants";

interface FetchPqrsQueryParams {
  uid: string;
}

interface PostDocumentsQueryParams {
  uid: string;
  date: string;
}

const PQRS_END_POINT = `/pqrs`;

export const pqrsApi = createApi({
  reducerPath: "pqrsApi",
  baseQuery: apiBaseQuery(PQRS_END_POINT),
  tagTypes: ["Pqr"],
  endpoints(builder) {
    return {
      fetchPqrsByUserId: builder.query<any, FetchPqrsQueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.uid}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Pqr"],
      }),
      postPqr: builder.mutation<any, PostDocumentsQueryParams>({
        query: (queryParams) => ({
          url: `/`,
          method: "POST",
          data: queryParams,
        }),
        invalidatesTags: ["Pqr"],
      }),
    };
  },
});

export const { useFetchPqrsByUserIdQuery, usePostPqrMutation } = pqrsApi;
