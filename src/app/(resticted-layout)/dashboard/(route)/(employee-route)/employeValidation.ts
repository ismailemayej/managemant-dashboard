import { z } from "zod";

export const EmployeSchema = z.object({
  title: z.string().nonempty("Employe name is required."),
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email is required."),
  phone: z.string().nonempty("Phone number is required."),
  details: z.string().nonempty("Designation is required."),
  gender: z.enum(["male", "female", "non-binary", "transgender"], {
    errorMap: () => ({ message: "Gender is required." }),
  }),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});
