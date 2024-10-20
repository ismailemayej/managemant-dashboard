import React from "react";

import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
import { EmployeeListDataTable } from "@/app/(resticted-layout)/components/employee-table/employee-list-data-table";
import { tasks } from "@/app/(resticted-layout)/components/employee-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/employee-table/columns";

const EmployeList = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Customers",
      link: "/dashboard/employee-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Employee"
        subtitle="Manage employees (Server side table functionalities.)"
        right={
          <CommonButton link="/dashboard/add-new-employee">
            Add New Employee
          </CommonButton>
        }
      />
      <EmployeeListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default EmployeList;
