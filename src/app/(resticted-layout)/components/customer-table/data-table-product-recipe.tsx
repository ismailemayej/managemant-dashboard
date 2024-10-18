/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Row } from "@tanstack/react-table";

interface DataTableProductRecipeProps<TData> {
  row: Row<TData>;
}

const DataTableProductRecipe = <TData,>({
  row,
}: DataTableProductRecipeProps<TData>) => {
  // Example pita recipe data
  const pitaRecipe = {
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup water",
      "1 teaspoon salt",
      "1 tablespoon olive oil",
      "1 teaspoon yeast",
    ],
    steps: [
      "Mix flour, salt, yeast in a bowl.",
      "Gradually add water and oil, knead until smooth.",
      "Cover and let the dough rise for 1 hour.",
      "Preheat oven to 250°C (482°F) and place a baking sheet inside.",
      "Divide dough into balls, roll them out and bake for 5 minutes.",
    ],
  };

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
            <ul>
              {pitaRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="font-bold mt-2">Steps:</h3>
            <ol>
              {pitaRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DataTableProductRecipe;



















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

// const DataTableProductRecipe = <TData,>({
//   row,
// }: DataTableProductCostProps<TData>) => {
//   // Assuming the row contains 'cost' and 'description' as data fields.


//   return (
//     <div>
//       <HoverCard>
//         <HoverCardTrigger>
//           {/* You can render the cost or any other row data here */}
//           <span>Show Recipe</span>
//         </HoverCardTrigger>
//         <HoverCardContent>
//           {/* Display additional information on hover */}
//           <p>No description available</p>
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   );
// };

// export default DataTableProductRecipe;
