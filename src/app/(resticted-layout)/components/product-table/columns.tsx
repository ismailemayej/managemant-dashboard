"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { ProductDataTableRowActions } from "./data-table-row-actions";

import { Product } from "./data/schema";
import DataTableProductCost from "./data-table-product-cost";
import DataTableProductPrice from "./data-table-product-price";
import DataTableProductRecipe from "./data-table-product-recipe";

export const columns: ColumnDef<Product>[]= [
  {
    id: "serial",
    header: "S/N",
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pitha Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    id: "productcost",
    header: "Cost",
    cell: ({ row }) => <DataTableProductCost row={row} />,
  },
  {
    accessorKey: "id",
    id: "productprice",
    header: "Price",
    cell: ({ row }) => <DataTableProductPrice row={row} />,
  },
  {
    accessorKey: "id",
    id: "productrecipe",
    header: "Recipe",
    cell: ({ row }) => <DataTableProductRecipe row={row} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          
          <span>{status}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <ProductDataTableRowActions row={row} />,
  },
];
