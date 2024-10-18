/* eslint-disable @typescript-eslint/no-explicit-any */
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
const ManageCustomer = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Manage Customer</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="number"
          placeholder="SL Number"
          defaultValue=""
          {...register("slNumber", { required: true, valueAsNumber: true })}
        />
        {errors.slNumber && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Customer’s name"
          defaultValue=""
          {...register("customerName", { required: true })}
        />
        {errors.customerName && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Phone Number"
          defaultValue=""
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Address"
          defaultValue=""
          {...register("address", { required: true })}
        />
        {errors.address && <span>This field is required</span>}
        <Input
          type="number"
          placeholder="Number of Purchase"
          defaultValue=""
          {...register("numberOfPurchase", {
            required: true,
            valueAsNumber: true,
          })}
        />
        {errors.numberOfPurchase && <span>This field is required</span>}
        <Select onValueChange={(value) => setValue("purchaseType", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Regular/Irregular" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="irregular">Irregular</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <SubmitButton className="w-full">Edit Customer</SubmitButton>
      </form>
    </div>
  );
};
export default ManageCustomer;
