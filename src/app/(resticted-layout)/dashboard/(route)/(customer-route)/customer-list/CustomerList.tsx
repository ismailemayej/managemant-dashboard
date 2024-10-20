import React from "react";
import { tasks } from "../../../../../components/product-table/data/tasks";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
import { columns } from "@/app/(resticted-layout)/components/customer-table/columns";
import { CustomerListDataTable } from "@/app/(resticted-layout)/components/customer-table/customer-list-data-table";
const CustomerList = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Customers",
      link: "/dashboard/customer-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Customer"
        subtitle="Manage employees (Server side table functionalities."
        right={
          <CommonButton link="/dashboard/add-new-customer">
            Add New Customer
          </CommonButton>
        }
      />
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  );
};
export default CustomerList;
