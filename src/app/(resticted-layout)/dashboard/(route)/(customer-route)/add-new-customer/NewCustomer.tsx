/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getUserInfo } from "@/services/auth.services";
import dynamic from "next/dynamic";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";

import { useCreateCustomerMutation } from "@/redux/api/customersApi";
import { CustomerValidationSchema } from "./customerValidation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NewAdmin() {
  const [createCustomer, ]= useCreateCustomerMutation()
  const [userRole, setUserRole] = useState("");
 

  
  const form = useForm<z.infer<typeof CustomerValidationSchema>>({
    resolver: zodResolver(CustomerValidationSchema),
    defaultValues: {
      password: "",
      customer: {
        
        name: {
          name: "", 
        },
        gender: "male", 
        email: "",
        contactNo: "",
        address: "",
      
      },
    },
    
  });

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  const {
    formState: { errors },
  } = form;

  console.log("Form errors:", errors);


  const onSubmit = async (formValues: z.infer<typeof CustomerValidationSchema>) => {
    const data = {
      password: "pass456745@#$%^&*(",
      customer: {
        name: {
          name: formValues.customer.name.name,
        },
        gender: formValues.customer.gender,
        email: formValues.customer.email,
        contactNo: formValues.customer.contactNo,
        address: formValues.customer.address,
       
      }
    };
    console.log(data)
    
    try {
      // Call the createAdmin mutation with the constructed data
      const res = await createCustomer(data).unwrap();
      
      // Log the response or handle it as needed
      console.log("🚀 ~ onSubmit ~ res:", res);
      toast.success("Customer created successfully")
      // Optionally reset the form or show a success message here
      form.reset();
    } catch (error) {
      toast.error("Failed to create Customer")
      console.error("Failed to create Customer:", error);
      // You can handle error messages or show a notification here
    }
  };
  

 

  

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 sm:gap-4 sm:py-4">
            <div className="mx-auto grid max-w-[75rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Link href={`/dashboard/${userRole}/product-manage`}>
                  <Button variant="outline" size="icon" className="h-7 w-16">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="">Back</span>
                  </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Create Admin
                </h1>
              </div>
              <div className="items-center gap-2 md:ml-auto md:flex">
                <Button type="submit" size="sm" className="text-lg">
                  Create Admin
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Admin Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <FormField
                          control={form.control}
                          name="customer.name.name" // Should match the schema
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Admin Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Admin Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="customer.email" // Should match the schema
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Admin Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Admin Email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="customer.contactNo" // Should match the schema
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Admin Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="Admin Phone" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="customer.address" // Should match the schema
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <ReactQuill
                                  {...field}
                                  value={field.value || ""}
                                  onChange={field.onChange}
                                  className="w-full"
                                  placeholder="address"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                      
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid auto-rows-max items-start gap-4 lg:gap-8 w-full">
                  <FormField
                    control={form.control}
                    name="customer.gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">
                                other
                                </SelectItem>
                                
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage>
                          
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                 
                </div>
              </div>
            </div>
          </main>
        </form>
      </Form>
    </>
  );
}
