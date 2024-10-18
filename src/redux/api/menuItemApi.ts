
import { IMeta } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PATH = "/menus"

export const menuItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createMenuItem: build.mutation({
      query: (data) => {
        // for (const pair of data.entries()) {
        //   console.log(pair[0] + ":", pair[1]);
        // }
        return {
        url: `${PATH}/create-menu-item`,
        method: "POST",
        contentType: "application/json",
        data,
      }},
      invalidatesTags: [tagTypes.menuItem],
    }),
    getAllMenuItem: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          menuItems: response,
          meta,
        };
      },
      providesTags: [tagTypes.menuItem],
    }),
    getMyStores: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PATH}/store/my-store`,
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
      providesTags: [tagTypes.menuItem],
    }),
    getStore: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PATH}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.menuItem],
    }),
   storeStatusChange: build.mutation({
      query: (data) => ({
        url:`${PATH}/store/status/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.menuItem],
    }),
    deleteStore: build.mutation({
      query: (id) => ({
        url: `${PATH}/store/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.menuItem],
    }),
  }),
});

export const {
useCreateMenuItemMutation, 
useGetAllMenuItemQuery
} = menuItemApi;