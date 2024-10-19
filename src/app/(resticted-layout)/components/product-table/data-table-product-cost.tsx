/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";
import { Product } from "./data/schema";

interface DataTableProductCostProps {
  row: Row<Product>; // Specify the type of row as Product
}

const DataTableProductCost: React.FC<DataTableProductCostProps> = ({ row }) => {
  // Access cost directly from the original product object
  const cost = row.original.cost;


  // Destructure with fallback values
  const {
    materialCost = 0,
    labourCost = 0,
    maintenanceCost = 0,
    transportationCost = 0,
  } = cost || {};

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          {/* Display total cost or a label like 'Product Cost' */}
          <span>Cost</span>
        </HoverCardTrigger>
        <HoverCardContent>
          {/* Display detailed cost breakdown on hover */}
          <div>
            <p className="text-lg">Product Cost</p>
            <p><strong>Material Cost:</strong> ৳{materialCost.toFixed(2)}</p>
            <p><strong>Labour Cost:</strong> ৳{labourCost.toFixed(2)}</p>
            <p><strong>Maintenance Cost:</strong> ৳{maintenanceCost.toFixed(2)}</p>
            <p><strong>Transportation Cost:</strong> ৳{transportationCost.toFixed(2)}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductCost;






























