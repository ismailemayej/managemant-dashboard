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
  // Assuming the row contains 'cost' and 'description' as data fields.


  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          {/* You can render the cost or any other row data here */}
          <span>Cost</span>
        </HoverCardTrigger>
        <HoverCardContent>
          {/* Display additional information on hover */}
          <p>No description available</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductCost;
