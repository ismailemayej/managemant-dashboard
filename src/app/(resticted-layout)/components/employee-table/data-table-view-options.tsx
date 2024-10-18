import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../custom/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Modal2 } from "@/components/dialog/Dialog2";
import { PencilOff, Trash2 } from "lucide-react";
import ManageEmploye from "../../dashboard/(route)/super-admin/(employee-route)/ManageEmployee";

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
        name="Employee"
        body={<ManageEmploye />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
