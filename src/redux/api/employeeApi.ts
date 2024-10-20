import { IMeta } from "../../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PATH = "/users";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      createEmployee: build.mutation({
        query: (data) => {
          // for (const pair of data.entries()) {
          //   console.log(pair[0] + ":", pair[1]);
          // }0
          return {
          url: `${PATH}/create-employee`,
          method: "POST",
          contentType: 'multipart/form-data',
          data,
        }},
        invalidatesTags: [tagTypes.employee],
      }),
      getAllEmployee: build.query({
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
        providesTags: [tagTypes.employee],
      }),
      
      getEmployee: build.query({
        query: (id: string | string[] | undefined) => ({
          url: `${PATH}/${id}`,
          method: "GET",
        }),
        providesTags: [tagTypes.employee],
      }),
      updateEmployee: build.mutation({
        query: ({ id, updateData }) => ({
          url: `${PATH}/${id}`,
          method: "PATCH",
          data: updateData,
        }),
        invalidatesTags: [tagTypes.employee],
      }),
     
      deleteEmployee: build.mutation({
        query: (id) => ({
          url: `${PATH}/soft/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [tagTypes.employee],
      }),
    }),
  });


  export const {
    useCreateEmployeeMutation, 
    useGetAllEmployeeQuery, 
    useGetEmployeeQuery, 
    useUpdateEmployeeMutation
} = employeeApi;