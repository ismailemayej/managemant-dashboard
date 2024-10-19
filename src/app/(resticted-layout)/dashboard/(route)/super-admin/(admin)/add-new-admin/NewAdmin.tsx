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
import { Textarea } from "@/components/ui/textarea";
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
      <h1 className="text-center text-3xl font-bold">Add New Admin</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="text"
          placeholder="Admin Name"
          defaultValue=""
          {...register("name")}
        />
        {errors.name && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Admin Email"
          defaultValue=""
          {...register("email")}
        />
        {errors.email && <span>This field is required</span>}
        <Input
          type="number"
          placeholder="Mobile"
          defaultValue=""
          {...register("phone")}
        />
        {errors.phone && <span>This field is required</span>}
        <Textarea
          placeholder="designation"
          defaultValue=""
          {...register("designation")}
        />
        {errors.designation && <span>This field is required</span>}

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

        <SubmitButton className="w-full">Add Admin</SubmitButton>
      </form>
    </div>
  );
};
export default NewAdmin;
