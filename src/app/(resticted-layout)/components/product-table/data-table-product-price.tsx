/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";

interface DataTableProductPriceProps<TData> {
  row: Row<TData>;
}

const DataTableProductPrice = <TData,>({
  row,
}: DataTableProductPriceProps<TData>) => {
  // Assuming the row contains 'onlinePrice', 'retailPrice', and 'wholesalePrice' fields.
  const onlinePrice = Number(row.getValue('onlinePrice')) || 0;
  const retailPrice = Number(row.getValue('retailPrice')) || 0;
  const wholesalePrice = Number(row.getValue('wholesalePrice')) || 0;

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
            <p><strong>Online Price:</strong> ${onlinePrice}</p>
            <p><strong>Retail Price:</strong> ${retailPrice}</p>
            <p><strong>Wholesale Price:</strong> ${wholesalePrice}</p>
            
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductPrice;



// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import { Row } from "@tanstack/react-table";

// interface DataTableProductCostProps<TData> {
//   row: Row<TData>;
// }

// const DataTableProductPrice = <TData,>({
//   row,
// }: DataTableProductCostProps<TData>) => {
//   // Assuming the row contains 'cost' and 'description' as data fields.
  


//   return (
//     <div>
//       <HoverCard>
//         <HoverCardTrigger>
//           {/* You can render the cost or any other row data here */}
//           <span>price</span>
//         </HoverCardTrigger>
//         <HoverCardContent>
//           {/* Display additional information on hover */}
//           <p>No description available</p>
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   );
// };

// export default DataTableProductPrice;
