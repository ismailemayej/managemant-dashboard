import React from "react";
import { columns } from "../../../../components/product-table/columns";
import { tasks } from "../../../../components/product-table/data/tasks";
import { ProductListDataTable } from "@/app/(resticted-layout)/components/product-table/product-list-data-table";

const page = () => {
  return (
    <div>
      <ProductListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default page;
