"use client";
import SubmitButton from "@/components/button/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UiRoute from "@/components/UiRoute/UiRoute";
import React from "react";
import { useForm } from "react-hook-form";
const NewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const routes = [
    { name: "Dashboard", link: "/dashboard/super-admin" },
    { name: "Products", link: "/dashboard/super-admin/product-list" },
    {
      name: "add New Employee",
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Product Image</Label>
          <Input {...register("file")} id="picture" type="file" />
        </div>

        <SubmitButton className="w-full">Add Product</SubmitButton>
      </form>
    </div>
  );
};
export default NewProduct;
