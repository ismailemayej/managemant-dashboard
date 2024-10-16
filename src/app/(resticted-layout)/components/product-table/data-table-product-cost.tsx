/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";

interface DataTableProductCostProps<TData> {
  row: Row<TData>;
}

const DataTableProductCost = <TData,>({
  row,
}: DataTableProductCostProps<TData>) => {
  // Assuming the row contains 'materialCost', 'labourCost', 'maintenanceCost', and 'transportationCost' as fields.
  const materialCost = Number(row.getValue('materialCost')) || 0;
  const labourCost = Number(row.getValue('labourCost')) || 0;
  const maintenanceCost = Number(row.getValue('maintenanceCost')) || 0;
  const transportationCost = Number(row.getValue('transportationCost')) || 0;

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
            <p className="text-lg ">Product Cost</p>
            <p><strong>Material Cost:</strong> ${materialCost}</p>
            <p><strong>Labour Cost:</strong> ${labourCost}</p>
            <p><strong>Maintenance Cost:</strong> ${maintenanceCost}</p>
            <p><strong>Transportation Cost:</strong> ${transportationCost}</p>
            <p><strong>Total Cost:</strong> ${materialCost + labourCost + maintenanceCost + transportationCost}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductCost;




















