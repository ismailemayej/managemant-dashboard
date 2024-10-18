
"use client";
import SubmitButton from "@/components/button/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UiRoute from "@/components/UiRoute/UiRoute";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { useForm } from "react-hook-form";
import { Post } from "@/components/ApiHandle";
const NewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    //  await Post("data", "name");
  };
  const routes = [
    { name: "Dashboard", link: "/dashboard/super-admin" },
    { name: "Products", link: "/dashboard/super-admin/product-list" },
    {
      name: "Add New Product",
      link: "/dashboard/super-admin/add-new-product",
    },
  ];

  return (
    <div>
      <UiRoute routes={routes} />
      <h1 className="text-center text-3xl font-bold">Add New Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mx-5 lg:mx-10 border rounded-lg p-6 "
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Product Image</Label>
          <Input {...register("file")} id="picture" type="file" />
        </div>
        <Input
          type="text"
          placeholder="Product Name"
          defaultValue=""
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <Input
          type="number"
          placeholder="Product Price"
          defaultValue=""
          {...register("price", { required: true, valueAsNumber: true })}
        />
        {errors.price && <span>This field is required</span>}
        <Textarea
          placeholder="Product Description"
          defaultValue=""
          {...register("description", { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Product Category"
          defaultValue=""
          {...register("category", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
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
        />
        {errors.rating && (
          <span>This field is required and must be between 0 and 5</span>
        )}
        <SubmitButton className="w-full">Add Product</SubmitButton>
      </form>
    </div>
  );
};
export default NewProduct;
