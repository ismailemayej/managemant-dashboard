"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { statuses } from "./data/data";
import { Task } from "./data/schema";
import DataTableProductCost from "./data-table-product-cost";
import DataTableProductPrice from "./data-table-product-price";
import DataTableProductRecipe from "./data-table-product-recipe";

export const columns: ColumnDef<Task>[] = [
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
      <DataTableColumnHeader column={column} title="Title" />
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
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
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
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
