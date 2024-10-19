import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { EmployeeListDataTable } from "@/app/(resticted-layout)/components/employee-table/employee-list-data-table";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";

const EmployeList = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/superadmin",
    },
    {
      name: "Customers",
      link: "/dashboard/superadmin/employee-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Employee"
        subtitle="Manage employees (Server side table functionalities.)"
        right={
          <CommonButton link="/dashboard/superadmin/add-new-employee">
            Add New Employee
          </CommonButton>
        }
      />
      <EmployeeListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default EmployeList;
