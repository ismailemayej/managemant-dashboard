import React from "react";
import { columns } from "../../../../../components/product-table/columns";
import { tasks } from "../../../../../components/product-table/data/tasks";
import { ProductListDataTable } from "@/app/(resticted-layout)/components/product-table/product-list-data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="mx-4">
      <Link href="/dashboard/super-admin/add-new-product">
        <Button className="my-3">Add New Product</Button>
      </Link>
      <ProductListDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default page;
