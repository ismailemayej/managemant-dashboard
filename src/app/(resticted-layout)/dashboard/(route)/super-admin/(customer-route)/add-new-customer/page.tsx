"use client";
import SubmitButton from "@/components/button/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    register,
    handleSubmit,
    watch,
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

        <SubmitButton className="w-full">Add Customer</SubmitButton>
      </form>
    </div>
  );
};
export default page;
