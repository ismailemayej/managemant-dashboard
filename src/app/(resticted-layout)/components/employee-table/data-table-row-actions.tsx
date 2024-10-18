/* eslint-disable @typescript-eslint/no-unused-vars */

import { Row } from "@tanstack/react-table";


import ManageProduct from "../../dashboard/(route)/super-admin/(product-route)/ManageProduct";
import { PencilOff, Trash2 } from "lucide-react";
import { Modal2 } from "@/components/dialog/Dialog2";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex gap-1">
      <Modal2 button={<PencilOff />} name="Employee" body={<ManageProduct />} />
      ;
      <Trash2 />
    </div>
  );
}
