import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { CustomerListDataTable } from "@/app/(resticted-layout)/components/customer-table/customer-list-data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CustomerList = () => {
  return (
    <div className="mx-4">
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default CustomerList;
