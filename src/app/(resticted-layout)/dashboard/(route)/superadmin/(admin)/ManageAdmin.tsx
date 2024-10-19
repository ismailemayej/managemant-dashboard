"use client";
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

import React from "react";
import { useForm } from "react-hook-form";
const ManageAdmin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Manage Admin</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1  mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="text"
          placeholder="Admin Name"
          defaultValue=""
          {...register("name", { required: true })}
          className="my-4"
        />
        {errors.name && (
          <span className="text-red-500 my-1">Admin Name is required</span>
        )}
        <Input
          type="text"
          placeholder="Admin ID"
          defaultValue=""
          {...register("id", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="my-4"
        />
        {errors.id && (
          <span className="text-red-500 my-1">
            Admin ID is required and must be a valid email
          </span>
        )}
        <Input
          type="text"
          placeholder="Admin Email"
          defaultValue=""
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="my-4"
        />
        {errors.email && (
          <span className="text-red-500 my-1">
            Admin Email is required and must be a valid email
          </span>
        )}
        <Input
          type="password"
          placeholder="Admin Password"
          defaultValue=""
          {...register("password", { required: true })}
          className="my-4"
        />
        {errors.password && (
          <span className="text-red-500 my-1">Admin Password is required</span>
        )}
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
        <SubmitButton className="w-full my-4">Edit Admin</SubmitButton>
      </form>
    </div>
  );
};
export default ManageAdmin;
