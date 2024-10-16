import { columns } from "@/app/(resticted-layout)/components/employee-table/columns";
import { tasks } from "@/app/(resticted-layout)/components/employee-table/data/tasks";
import { EmployeeDataTable } from "@/app/(resticted-layout)/components/employee-table/employ-data-table";
import React from "react";

const page = () => {
  return (
    <div>
      <EmployeeDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default page;
