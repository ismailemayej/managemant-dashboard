import { Table } from "@tanstack/react-table";

import { Modal2 } from "@/components/dialog/Dialog2";
import { PencilOff, Trash2 } from "lucide-react";
import ManageEmploye from "../../dashboard/(route)/superadmin/(employee-route)/ManageEmployee";

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
        body={<ManageEmploye />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
