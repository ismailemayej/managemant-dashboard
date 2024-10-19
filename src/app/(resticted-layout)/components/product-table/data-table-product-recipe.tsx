import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";
import { Product } from "./data/schema";
import DOMPurify from "dompurify";

interface DataTableProductRecipeProps {
  row: Row<Product>;
}

const DataTableProductRecipe: React.FC<DataTableProductRecipeProps> = ({ row }) => {
  // Access the details and sanitize it
  const details = row.original.details || ''; // Fallback to an empty string if undefined
  const cleanHtml = DOMPurify.sanitize(details);

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          {/* Display a label for the pita recipe */}
          <span>Pita Recipe</span>
        </HoverCardTrigger>
        <HoverCardContent>
          {/* Display the recipe details on hover */}
          <div>
            <h3 className="font-bold">Ingredients:</h3>
            <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductRecipe;
