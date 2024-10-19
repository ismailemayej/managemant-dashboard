/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row } from "@tanstack/react-table";
import { Modal2 } from "@/components/dialog/Dialog2";
import { PencilOff, Trash2 } from "lucide-react";
import ProductUpdateModal from "../../dashboard/(route)/superadmin/(product-route)/add-new-product/product-update-modal";
import { Product } from "./data/schema";


interface DataTableProductPriceProps {
  row: Row<Product>;
}

  
const ProductDataTableRowActions: React.FC<DataTableProductPriceProps> = ({ row }) => {
  const productId = row.original._id; 
  console.log("🚀 ~ productId:", productId)
  return (
    <div className="flex justify-center border rounded-lg" >
      <Modal2
        button={
          <PencilOff className="text-red-500 p-1 border-r hover:bg-slate-300" />
        }
        name="Products"
        body={<ProductUpdateModal  />}
      />
      <Trash2 className="text-red-500 p-1" />
    </div>
  );
}
export default ProductDataTableRowActions;