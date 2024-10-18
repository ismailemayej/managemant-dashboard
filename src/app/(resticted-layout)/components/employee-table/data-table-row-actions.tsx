/* eslint-disable @typescript-eslint/no-unused-vars */

import { Row } from "@tanstack/react-table";
import { PencilOff, Trash2 } from "lucide-react";
import { Modal2 } from "@/components/dialog/Dialog2";
import ManageEmploye from "../../dashboard/(route)/super-admin/(employee-route)/ManageEmployee";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function EmployeeDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex gap-1">
      <Modal2 button={<PencilOff />} name="Employee" body={<ManageEmploye />} />
      ;
      <Trash2 />
    </div>
  );
}
