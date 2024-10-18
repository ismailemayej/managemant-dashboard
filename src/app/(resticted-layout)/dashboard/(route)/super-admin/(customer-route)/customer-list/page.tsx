import React from "react";
import { columns } from "@/app/(resticted-layout)/components/cutomer-list-table/columns";
import { CustomerListDataTable } from "@/app/(resticted-layout)/components/customer-table/customer-list-data-table";
import { tasks } from "@/app/(resticted-layout)/components/cutomer-list-table/data/tasks";

const page = async () => {
  // const customer = await Get("name");
  return (
    <div>
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default page;
