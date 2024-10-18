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
        className="flex-1 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <Input
          type="number"
          placeholder="SL Number"
          defaultValue=""
          {...register("slNumber", { required: true, valueAsNumber: true })}
          className="my-3"
        />
        {errors.slNumber && (
          <span className="text-red-500 my-3">SL Number is required</span>
        )}
        <Input
          type="text"
          placeholder="Customer’s name"
          defaultValue=""
          {...register("customerName", { required: true })}
          className="my-3"
        />
        {errors.customerName && (
          <span className="text-red-500 my-3">Customer’s name is required</span>
        )}
        <Input
          type="text"
          placeholder="Phone Number"
          defaultValue=""
          {...register("phoneNumber", { required: true })}
          className="my-3"
        />
        {errors.phoneNumber && (
          <span className="text-red-500 my-3">Phone Number is required</span>
        )}
        <Input
          type="text"
          placeholder="Address"
          defaultValue=""
          {...register("address", { required: true })}
          className="my-3"
        />
        {errors.address && (
          <span className="text-red-500 my-3">Address is required</span>
        )}
        <Input
          type="number"
          placeholder="Number of Purchase"
          defaultValue=""
          {...register("numberOfPurchase", {
            required: true,
            valueAsNumber: true,
          })}
          className="my-3"
        />
        {errors.numberOfPurchase && (
          <span className="text-red-500 my-3">
            Number of Purchase is required
          </span>
        )}
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
        <SubmitButton className="w-full my-4">Edit Customer</SubmitButton>
      </form>
    </div>
  );
};
export default ManageCustomer;
