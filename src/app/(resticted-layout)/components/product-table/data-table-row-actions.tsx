/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row } from "@tanstack/react-table";
import { Modal2 } from "@/components/dialog/Dialog2";
import ManageProduct from "../../dashboard/(route)/super-admin/(product-route)/ManageProduct";
import { PencilOff, Trash2 } from "lucide-react";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function ProductDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)
  return (
    <div className="flex justify-center border rounded-lg">
      <Modal2
        button={
          <PencilOff className="text-red-500 p-1 border-r hover:bg-slate-300" />
        }
        name="Products"
        body={<ManageProduct />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
