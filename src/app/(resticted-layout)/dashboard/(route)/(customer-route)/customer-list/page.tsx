import React from "react";

import { CustomerListDataTable } from "@/app/(resticted-layout)/components/customer-table/customer-list-data-table";

import CustomerList from "./CustomerList";
import { tasks } from "@/app/(resticted-layout)/components/customer-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/customer-table/columns";

const page = async () => {
  // const customer = await Get("name");
  return (
    <div>
      <CustomerList />
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default page;
