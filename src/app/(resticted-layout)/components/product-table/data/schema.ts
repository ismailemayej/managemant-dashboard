import { z } from 'zod';

// Define the schema for TPrice (price object)
export const priceSchema = z.object({
  onlinePrice: z.number(),
  retailPrice: z.number(),
  wholesalePrice: z.number(),
});

// Define the schema for TCost (cost object)
export const costSchema = z.object({
  materialCost: z.number(),
  labourCost: z.number(),
  maintenanceCost: z.number(),
  transportationCost: z.number(),
});

// Define the schema for Product
export const productSchema = z.object({
  _id :  z.string(),
  title: z.string(),
  image: z.string().optional(),   // Assuming image can be optional for frontend
  details: z.string(),
  price: priceSchema,             // Nested schema for pricing
  cost: costSchema,               // Nested schema for cost
  pitharecipe: z.string().optional(), // Optional, assuming recipes might not always be included
  status: z.enum(['active', 'draft']).optional(), // Status can be 'active' or 'draft', optional
  isDeleted: z.boolean().optional(), // Optional field for soft delete
  createdAt: z.date().optional(),   // Optional, assuming these are managed by the backend
  updatedAt: z.date().optional(),
});

// Infer the Product type from the Zod schema
export type Product = z.infer<typeof productSchema>;











// import { z } from 'zod'

// // We're keeping a simple non-relational schema here.
// // IRL, you will have a schema for your data models.
// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// })

// export type Task = z.infer<typeof taskSchema>
