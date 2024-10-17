import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { ProductListDataTable } from "@/app/(resticted-layout)/components/product-table/product-list-data-table";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
const AllProduct = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Customers",
      link: "/dashboard/super-admin/product-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute
        routes={pathRoute}
        right={
          <CommonButton link="/dashboard/super-admin/add-new-product">
            Add New Product
          </CommonButton>
        }
      />
      <ProductListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default AllProduct;
