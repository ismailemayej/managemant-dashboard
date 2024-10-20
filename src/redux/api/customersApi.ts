import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "../../../types";

const PATH = "/users";
export const customersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomer: build.mutation({
      query: (data) => {
        // for (const pair of data.entries()) {
        //   console.log(pair[0] + ":", pair[1]);
        // }0
        return {
          url: `${PATH}/create-customer`,
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.customers],
    }),
    getAllCustomer: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          customers: response,
          meta,
        };
      },
      providesTags: [tagTypes.customers],
    }),
    getMyCustomer: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}/customer/my-customers`,
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
      providesTags: [tagTypes.customers],
    }),
    getCustomer: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PATH}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.customers],
    }),
    updateCustomer: build.mutation({
      query: ({ id, updateData }) => ({
        url: `${PATH}/${id}`,
        method: "PATCH",
        data: updateData,
      }),
      invalidatesTags: [tagTypes.customers],
    }),
    customerStatusChange: build.mutation({
      query: (data) => ({
        url: `${PATH}/customer/status/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.customers],
    }),
    deleteCustomer: build.mutation({
      query: (id) => ({
        url: `${PATH}/customer/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.customers],
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useGetAllCustomerQuery,
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} = customersApi;
