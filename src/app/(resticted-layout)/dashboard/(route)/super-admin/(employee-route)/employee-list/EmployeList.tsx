import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { EmployeeListDataTable } from "@/app/(resticted-layout)/components/employee-table/employee-list-data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";

const EmployeList = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Customers",
      link: "/dashboard/super-admin/employee-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute
        routes={pathRoute}
        right={
          <CommonButton link="/dashboard/super-admin/add-new-employee">
            Add New Employee
          </CommonButton>
        }
      />
      <EmployeeListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default EmployeList;
