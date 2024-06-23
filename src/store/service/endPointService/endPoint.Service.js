import { ItemDetailApiService } from "../apiService";

const itemDetailApiEndPoint = ItemDetailApiService.injectEndpoints({
  endpoints: (builder) => ({
    getItemDetail: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetItemDetailQuery } = itemDetailApiEndPoint;
