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
const NewCustomer = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Add New Customer</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Your Name"
          defaultValue=""
          {...register("example")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
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

        <SubmitButton className="w-full">Add Customer</SubmitButton>
      </form>
    </div>
  );
};
export default NewCustomer;
