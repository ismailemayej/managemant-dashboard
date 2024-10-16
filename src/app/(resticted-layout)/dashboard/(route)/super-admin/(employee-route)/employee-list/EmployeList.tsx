import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { EmployeeListDataTable } from "@/app/(resticted-layout)/components/employee-table/employee-list-data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EmployeList = () => {
  return (
    <div className="mx-4">
      <Link href="/dashboard/super-admin/add-new-employee">
        <Button className="my-3">Add New Employee</Button>
      </Link>
      <EmployeeListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default EmployeList;
