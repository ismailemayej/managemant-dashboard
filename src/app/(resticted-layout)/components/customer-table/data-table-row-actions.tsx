/* eslint-disable @typescript-eslint/no-unused-vars */

import { Row } from "@tanstack/react-table";
import { Modal2 } from "@/components/dialog/Dialog2";
import { PencilOff, Trash2 } from "lucide-react";
import CustomerUpdateModal from "../../dashboard/(route)/(customer-route)/customer-update-modal";
// import { labels } from './data/data'
// import { taskSchema } from './data/schema'
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function CustomerDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)

  return (
    <div className="flex justify-center border rounded-lg">
      <Modal2
        button={
          <PencilOff className="text-red-500 p-1 border-r hover:bg-slate-300" />
        }
        name="Customer"
        body={<CustomerUpdateModal />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
