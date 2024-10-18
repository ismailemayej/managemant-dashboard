"use client";
import { Post } from "@/components/ApiHandle";
import SubmitButton from "@/components/button/SubmitButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UiRoute from "@/components/UiRoute/UiRoute";
import React from "react";
import { useForm } from "react-hook-form";
const NewAdmin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await Post("data", "name");
    console.log(data);
  };
  const routes = [
    { name: "Dashboard", link: "/dashboard/super-admin" },
    { name: "Admin", link: "/dashboard/super-admin/all-admin" },
    {
      name: "Add New Admin",
      link: "/dashboard/super-admin/add-new-admin",
    },
  ];
  return (
    <div>
      <UiRoute routes={routes} />

      <h1 className="text-center text-3xl font-bold">Add New Admin</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="text"
          placeholder="Admin Name"
          defaultValue=""
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Admin ID"
          defaultValue=""
          {...register("id", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.id && (
          <span>This field is required and must be a valid email</span>
        )}
        <Input
          type="text"
          placeholder="Admin Email"
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
          type="password"
          placeholder="Admin Password"
          defaultValue=""
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <Select onValueChange={(value) => setValue("role", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <SubmitButton className="w-full">Add Admin</SubmitButton>
      </form>
    </div>
  );
};
export default NewAdmin;
