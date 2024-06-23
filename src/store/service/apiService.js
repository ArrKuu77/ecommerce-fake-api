import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Api_Bais_Url } from "../Lib/apiBaisUrl.lib";

export const ItemDetailApiService = createApi({
  reducerPath: "ItemDetailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Api_Bais_Url,
  }),
  endpoints: (builder) => ({}),
});
