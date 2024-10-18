/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "../../../types";

const PATH = "/order"

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomerOrder: build.mutation({
      query: (data) => {
        return {
        url: `${PATH}/create-order`,
        method: "POST",
        data,
      }},
      invalidatesTags: [tagTypes.order],
    }),
    getAllOrder: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order],
    }),
    getMyOrders: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}/user-orders`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          myOrders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order],
    }),
    getSingleOrder: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PATH}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),

    updateOrderPaymentStatus: build.mutation({
      query: ({ id, data }) => {
       console.log("🚀 ~ paymentStatus:", data)
       
        return {
          url: `${PATH}/payment-status/${id}`,
          method: "PATCH",
         
          body: JSON.stringify({ data }),
        }
      },
      invalidatesTags: [tagTypes.order],
    }),
    
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `${PATH}/product/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const {
    useCreateCustomerOrderMutation, 
    useGetAllOrderQuery, 
    useGetSingleOrderQuery, 
    useUpdateOrderPaymentStatusMutation, 
    useGetMyOrdersQuery
} = ordersApi;