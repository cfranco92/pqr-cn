import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/query/react";

const createClient = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
  });
};

const axiosBaseQuery =
  (
    { baseURL }: { baseURL: string } = {
      baseURL: "",
    }
  ): BaseQueryFn<
    {
      url?: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async (requestOpts) => {
    const axiosInstance = createClient(baseURL);
    const token: string | null = localStorage.getItem("token");
    const config = {
      ...requestOpts,
      headers: {
        Authorization: `Bearer ${token}`,
        ...requestOpts.headers,
      },
    };
    try {
      const result = await axiosInstance(config);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      const response: { error: Object } | { data: Object } = {
        error: { status: err.response?.status, data: err.response?.data },
      };
      return response;
    }
  };

export const apiBaseQuery = (apiPath: string) =>
  axiosBaseQuery({ baseURL: apiPath });
