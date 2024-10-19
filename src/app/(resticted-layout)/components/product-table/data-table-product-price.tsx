/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";
import { Product } from "./data/schema";

interface DataTableProductPriceProps {
  row: Row<Product>;
}

  
const DataTableProductPrice: React.FC<DataTableProductPriceProps> = ({ row }) => {
  // Access cost directly from the original product object
  const price = row.original.price;


  // Destructure with fallback values
  const {
    onlinePrice = 0,
    retailPrice = 0,
    wholesalePrice = 0,
    
  } = price || {};

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          {/* Display the label or any other row data here */}
          <span>Price Info</span>
        </HoverCardTrigger>
        <HoverCardContent>
          {/* Display detailed price breakdown on hover */}
          <div>
          <p className="text-lg ">Product price</p>
            <p><strong>Online Price:</strong> ৳{onlinePrice}</p>
            <p><strong>Retail Price:</strong> ৳{retailPrice}</p>
            <p><strong>Wholesale Price:</strong> ৳{wholesalePrice}</p>
            
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductPrice;



