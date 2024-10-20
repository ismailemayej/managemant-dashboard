import { z } from "zod";

// Define Gender enum
const GenderEnum = z.enum(["male", "female", "other"]);

// Create UserName validation schema
const createUserNameValidationSchema = z.object({
  name: z.string().min(1).max(20, "Name must be at most 20 characters long."), // Adjusted for name length
});

// Create Admin validation schema
export const AdminSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long."),
  admin: z.object({
    designation: z.string().nonempty("Designation is required."),
    name: createUserNameValidationSchema, 
    gender: GenderEnum,
    email: z.string().email("Invalid email address.").nonempty("Email is required."),
    contactNo: z.string().nonempty("Contact number is required."),
    address: z.string().nonempty("Address is required."),
    salary: z.string().nonempty("Salary is required."),
    
    
  }),
});
