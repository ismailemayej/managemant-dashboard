import { Table } from "@tanstack/react-table";

import { Modal2 } from "@/components/dialog/Dialog2";
import { PencilOff, Trash2 } from "lucide-react";
import EmployeUpdateModal from "../../dashboard/(route)/superadmin/(employee-route)/empolye-update-modal";
interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <div className="flex justify-center border rounded-lg">
      <Modal2
        button={
          <PencilOff className="text-red-500 p-1 border-r hover:bg-slate-300" />
        }
        name="Employe"
        body={<EmployeUpdateModal />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
