
"use client";
import SubmitButton from "@/components/button/SubmitButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

import React from "react";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full mx-4 max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your information below to register for your Pitha Business
            Management Dashboard.
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex-col gap-5 mx-5 lg:mx-10"
        >
          <label htmlFor="firstName">First Name</label>
          <Input
            className="mb-2"
            type="text"
            placeholder="Enter your first name"
            defaultValue=""
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
          <label htmlFor="lastName">Last Name</label>
          <Input
            className="mb-2"
            type="text"
            placeholder="Enter your last name"
            defaultValue=""
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
          <label htmlFor="email">Email</label>
          <Input
            className="mb-2"
            type="email"
            placeholder="Enter your email"
            defaultValue=""
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor="mobile">Mobile</label>
          <Input
            className="mb-2"
            type="tel"
            placeholder="Enter your mobile number"
            defaultValue=""
            {...register("mobile", { required: true })}
          />
          {errors.mobile && <span>This field is required</span>}
          <label htmlFor="address">Address</label>
          <Input
            className="mb-2"
            type="text"
            placeholder="Enter your address"
            defaultValue=""
            {...register("address", { required: true })}
          />
          {errors.address && <span>This field is required</span>}
          <label htmlFor="gender" className="mb-2">
            Gender
          </label>
          <Select onValueChange={(value) => setValue("gender", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <SubmitButton className="w-full my-2">Add Customer</SubmitButton>
        </form>
        <div className=" mb-2 text-center">
          Already Have an Account? please{" "}
          <Link className="mx-1 font-semibold text-blue-500" href="/login">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};
export default RegisterPage;
