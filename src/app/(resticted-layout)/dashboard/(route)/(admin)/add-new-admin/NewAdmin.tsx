/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChevronLeft, Upload } from "lucide-react";
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
import { handleDeleteImage } from "@/utils/handleCloudinaryFileDelete";
import CloudApi from "@/utils/CloudinaryApi";
import { AdminSchema } from "./adminValidation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateAdminMutation } from "@/redux/api/adminsApi";
import { toast } from "sonner";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NewAdmin() {
  const [createAdmin] = useCreateAdminMutation();
  const [userRole, setUserRole] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState();
  const [image, setImage] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof AdminSchema>>({
    resolver: zodResolver(AdminSchema),
    defaultValues: {
      password: "",
      admin: {
        designation: "",
        name: {
          name: "",
        },
        gender: "male",
        email: "",
        contactNo: "",
        address: "",
        salary: "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      console.error("Selected file is not an image.");
      // Optionally, you can display a message to the user
    }
  };

  const onSubmit = async (formValues: z.infer<typeof AdminSchema>) => {
    const data = {
      password: formValues.password,
      admin: {
        designation: formValues.admin.designation,
        name: {
          name: formValues.admin.name.name,
        },
        gender: formValues.admin.gender,
        email: formValues.admin.email,
        contactNo: formValues.admin.contactNo,
        address: formValues.admin.address,
        salary: formValues.admin.salary,
        profileImg: image,
      },
    };
    console.log(data);

    try {
      // Call the createAdmin mutation with the constructed data
      const res = await createAdmin(data).unwrap();

      // Log the response or handle it as needed
      console.log("🚀 ~ onSubmit ~ res:", res);
      toast.success("Admin created successfully");
      // Optionally reset the form or show a success message here
      form.reset();
    } catch (error) {
      toast.error("Failed to create admin");
      console.error("Failed to create admin:", error);
      // You can handle error messages or show a notification here
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      const cloudApi = new CloudApi({
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
      });

      if (file) {
        try {
          await cloudApi.uploadImage(
            file,
            (success: any) => {
              console.log("Image uploaded successfully:", success);
              setImage(success?.secure_url);
              localStorage.setItem(
                "public_id",
                JSON.stringify(success?.public_id)
              );
            },
            (error: any) => {
              console.error("Error uploading image:", error);
            }
          );
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };

    uploadImage();
  }, [file]);

  const handleImageReset = (key: string) => {
    const publicIdString = localStorage.getItem(key);
    if (publicIdString) {
      const publicId = JSON.parse(publicIdString);
      handleDeleteImage(publicId);
      if (key === "public_id") {
        setFile(null);
        setImage(undefined);
      }
      localStorage.removeItem(key);
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
                          name="admin.name.name" // Should match the schema
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
                          name="admin.email" // Should match the schema
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
                          name="admin.contactNo" // Should match the schema
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
                          name="password" // Add password field here
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder="Enter password"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage>
                                {errors.password && (
                                  <span className="text-red-500">
                                    {errors.password.message}
                                  </span>
                                )}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="admin.address" // Should match the schema
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

                        <FormField
                          control={form.control}
                          name="admin.salary" // Add salary field
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Salary</FormLabel>
                              <FormControl>
                                <Input placeholder="Salary" {...field} />
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
                    name="admin.gender"
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
                                <SelectItem value="non-binary">
                                  Non-binary
                                </SelectItem>
                                <SelectItem value="transgender">
                                  Transgender
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage></FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="admin.designation" // Add password field here
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="designation"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage></FormMessage>
                      </FormItem>
                    )}
                  />
                  <Card
                    className="overflow-hidden"
                    x-chunk="dashboard-07-chunk-4"
                  >
                    <CardHeader>
                      <CardTitle>Admin Profile Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {file ? (
                        <div>
                          <Image
                            src={image || ""}
                            alt="Uploaded image"
                            width={200}
                            height={200}
                            className="aspect-square w-full rounded-md object-cover"
                          />
                          <Button
                            type="button"
                            onClick={() => handleImageReset("public_id")}
                            size="sm"
                            variant="outline"
                            className="mt-1"
                          >
                            Reset Image
                          </Button>
                        </div>
                      ) : (
                        <div className="aspect-square flex flex-col justify-center items-center relative w-full cursor-pointer appearance-none rounded border-2 border-dashed bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5 mt-5">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                          />
                          <div className="flex flex-col justify-center items-center text-center">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                            <p>Drag and drop a file or click to browse Image</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </form>
      </Form>
    </>
  );
}
