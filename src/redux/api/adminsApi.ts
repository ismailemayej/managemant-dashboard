import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "../../../types";

const PATH = "/admin";

export const adminsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (data) => {
        // for (const pair of data.entries()) {
        //   console.log(pair[0] + ":", pair[1]);
        // }0
        return {
          url: `${PATH}/create-admin`,
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.admins],
    }),
    getAllAdmin: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admins],
    }),
    getMyAdmin: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}/admin/my-admins`,
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
      providesTags: [tagTypes.admins],
    }),
    getAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PATH}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admins],
    }),
    updateAdmin: build.mutation({
      query: ({ id, updateData }) => ({
        url: `${PATH}/${id}`,
        method: "PATCH",
        data: updateData,
      }),
      invalidatesTags: [tagTypes.admins],
    }),
    adminStatusChange: build.mutation({
      query: (data) => ({
        url: `${PATH}/admin/status/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admins],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${PATH}/admin/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admins],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllAdminQuery,
  useGetAdminQuery,
  useUpdateAdminMutation,
} = adminsApi;
