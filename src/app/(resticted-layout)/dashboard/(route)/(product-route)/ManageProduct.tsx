"use client";
import SubmitButton from "@/components/button/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { useForm } from "react-hook-form";
const ManageProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Manage Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Product Image</Label>
          <Input
            {...register("file")}
            id="picture"
            type="file"
            className="my-4"
          />
        </div>
        <Input
          type="text"
          placeholder="Product Name"
          defaultValue=""
          {...register("name", { required: true })}
          className="my-4"
        />
        {errors.name && (
          <span className="text-red-500 my-1">Product Name is required</span>
        )}
        <Input
          type="number"
          placeholder="Product Price"
          defaultValue=""
          {...register("price", { required: true, valueAsNumber: true })}
          className="my-4"
        />
        {errors.price && (
          <span className="text-red-500 my-1">Product Price is required</span>
        )}
        <Textarea
          placeholder="Product Description"
          defaultValue=""
          {...register("description", { required: true })}
          className="my-4"
        />
        {errors.description && (
          <span className="text-red-500 my-1">
            Product Description is required
          </span>
        )}
        <Input
          type="text"
          placeholder="Product Category"
          defaultValue=""
          {...register("category", { required: true })}
          className="my-4"
        />
        {errors.category && (
          <span className="text-red-500 my-1">
            Product Category is required
          </span>
        )}
        <Input
          type="number"
          placeholder="Product Rating"
          defaultValue=""
          {...register("rating", {
            required: true,
            valueAsNumber: true,
            min: 0,
            max: 5,
          })}
          className="my-4"
        />
        {errors.rating && (
          <span className="text-red-500 my-1">
            Product Rating is required and must be between 0 and 5
          </span>
        )}
        <SubmitButton className="w-full">Edit Product</SubmitButton>
      </form>
    </div>
  );
};
export default ManageProduct;
