
"use client";
import { Post } from "@/components/ApiHandle";
import SubmitButton from "@/components/button/SubmitButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";
import UiRoute from "@/components/UiRoute/UiRoute";
import React from "react";
import { useForm } from "react-hook-form";
const NewEmploye = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    // await Post("data", "name");
    console.log(data);
  };
  const routes = [
    { name: "Dashboard", link: "/dashboard/super-admin" },
    { name: "Employee", link: "/dashboard/super-admin/employee-list" },
    {
      name: "add New Employee",
      link: "/dashboard/super-admin/add-new-employee",
    },
  ];
  return (
    <div>
      <UiRoute routes={routes} />
      <h1 className="text-center text-3xl font-bold">Add New Employee</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="text"
          placeholder="Employee Name"
          defaultValue=""
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Designation"
          defaultValue=""
          {...register("designation", { required: true })}
        />
        {errors.designation && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Phone Number"
          defaultValue=""
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>This field is required</span>}
        <Input
          type="email"
          placeholder="E-mail"
          defaultValue=""
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <span>This field is required and must be a valid email</span>
        )}
        <Input
          type="text"
          placeholder="Address"
          defaultValue=""
          {...register("address", { required: true })}
        />
        {errors.address && <span>This field is required</span>}
        <Input
          type="number"
          placeholder="Salary"
          defaultValue=""
          {...register("salary", { required: true, valueAsNumber: true })}
        />
        {errors.salary && <span>This field is required</span>}
        <Select onValueChange={(value) => setValue("gender", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="transgender">Transgender</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <SubmitButton className="w-full">Add Employee</SubmitButton>
      </form>
    </div>
  );
};
export default NewEmploye;
