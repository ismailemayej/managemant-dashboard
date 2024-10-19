import { z } from "zod";
export const AdminSchema = z.object({
  title: z.string().min(1, "Admin Name is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Phone number should contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be a maximum of 15 digits"),
  details: z.string().nonempty("Designation is required"),
});
