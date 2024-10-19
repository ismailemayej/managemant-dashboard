import { z } from "zod";

const TCost = z.object({
  materialCost: z.number(), // Use z.number() to specify that it's a number
  labourCost: z.number(), // Similarly, use z.number() for other cost fields
  maintenanceCost: z.number(),
  transportationCost: z.number(),
});

const TPrice = z.object({
  onlinePrice: z.number(), // Specify the price fields as numbers
  retailPrice: z.number(),
  wholesalePrice: z.number(),
});

export const ProductSchema = z.object({
  title: z.string().min(1, "Product Title is required"),
  price: TPrice, // Add TPrice as part of the ProductSchema
  details: z.string().min(1, "Details are required"),
  status: z.string().min(1, "Status is required"),
  cost: TCost, // Add TCost to include the cost breakdown
});

export const ProductDefaultValues = {
  title: "",
  price: {
    onlinePrice: 0,
    retailPrice: 0,
    wholesalePrice: 0,
  },
  details: "",
  status: "",
  cost: {
    materialCost: 0,
    labourCost: 0,
    maintenanceCost: 0,
    transportationCost: 0,
  },
};
