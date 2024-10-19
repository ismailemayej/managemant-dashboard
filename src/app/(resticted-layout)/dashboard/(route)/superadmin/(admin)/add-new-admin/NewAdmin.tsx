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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminUpdateModal() {
  const [userRole, setUserRole] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [image, setImage] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof AdminSchema>>({
    resolver: zodResolver(AdminSchema),
    defaultValues: { title: "", email: "", phone: "", details: "" },
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
      ...formValues,
      image,
    };

    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      // const res = await createProduct(data).unwrap();
      // console.log("🚀 ~ onSubmit ~ res:", res);
    } catch (error) {
      console.error("Failed to create product:", error);
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
                          name="title" // Should match the schema
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
                          name="email" // Should match the schema
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
                          name="phone" // Should match the schema
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
                          name="details" // Should match the schema
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Designation</FormLabel>
                              <FormControl>
                                <ReactQuill
                                  {...field}
                                  value={field.value || ""}
                                  onChange={field.onChange}
                                  className="w-full"
                                  placeholder="details"
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

                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
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
