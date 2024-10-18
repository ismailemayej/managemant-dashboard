/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "../../../types";

const PATH = "/product"

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => {
        // for (const pair of data.entries()) {
        //   console.log(pair[0] + ":", pair[1]);
        // }
        return {
        url: `${PATH}/create-product`,
        method: "POST",
        contentType: 'multipart/form-data',
        data,
      }},
      invalidatesTags: [tagTypes.products],
    }),
    getAllProduct: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: [tagTypes.products],
    }),
    getMyProducts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}/product/my-products`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          appointments: response,
          meta,
        };
      },
      providesTags: [tagTypes.products],
    }),
    getProduct: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PATH}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),
    updateProduct: build.mutation({
      query: ({ id, updateData }) => ({
        url: `${PATH}/${id}`,
        method: "PATCH",
        data: updateData,
      }),
      invalidatesTags: [tagTypes.products],
    }),
   productStatusChange: build.mutation({
      query: (data) => ({
        url:`${PATH}/product/status/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.products],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `${PATH}/product/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
    useCreateProductMutation, 
    useGetAllProductQuery, 
    useGetProductQuery, 
    useUpdateProductMutation
} = productsApi;