/* eslint-disable @typescript-eslint/no-unused-vars */

import { Row } from "@tanstack/react-table";
import { PencilOff, Trash2 } from "lucide-react";
import { Modal2 } from "@/components/dialog/Dialog2";
import EmployeUpdateModal from "../../dashboard/(route)/superadmin/(employee-route)/empolye-update-modal";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function EmployeeDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex justify-center border rounded-lg">
      <Modal2
        button={
          <PencilOff className="text-red-500 p-1 border-r hover:bg-slate-300" />
        }
        name="Employee"
        body={<EmployeUpdateModal />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
