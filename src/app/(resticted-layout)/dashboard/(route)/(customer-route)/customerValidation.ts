import { z } from "zod";

export const CustomerSchema = z.object({
  title: z.string().nonempty("Customer name is required."),
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email is required."),
  phone: z.string().nonempty("Phone number is required."),
  details: z.string().nonempty("Designation is required."),
  gender: z.enum(["male", "female", "non-binary", "transgender"], {
    errorMap: () => ({ message: "Gender is required." }),
  }),
});
