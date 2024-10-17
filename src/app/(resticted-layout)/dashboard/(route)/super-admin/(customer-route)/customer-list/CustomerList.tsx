import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { CustomerListDataTable } from "@/app/(resticted-layout)/components/customer-table/customer-list-data-table";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
const CustomerList = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Customers",
      link: "/dashboard/super-admin/customer-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Customer"
        subtitle="Manage employees (Server side table functionalities."
        right={
          <CommonButton link="/dashboard/super-admin/add-new-customer">
            Add New Customer
          </CommonButton>
        }
      />
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default CustomerList;
