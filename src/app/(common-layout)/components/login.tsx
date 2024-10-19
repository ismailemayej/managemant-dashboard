/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";

  interface IFormInput {
    email: string;
    password: string;
  }
  
  export const validationSchema = z.object({
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(6, "Must be at least 6 characters"),
  });
  

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<IFormInput>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof validationSchema>) => {
    try {
      const res = await userLogin(values);
      console.log("🚀 ~ onSubmit ~ res:", res);

      if (res?.data?.accessToken) {
        toast.success(res?.message || "Login successful!");

        storeUserInfo({ accessToken: res?.data?.accessToken });

        const userInfo = getUserInfo();
        console.log("🚀 ~ onSubmit ~ userInfo:", userInfo);

        if (userInfo?.role === "admin" || userInfo?.role === "superadmin") {
          router.push(`/dashboard/${userInfo?.role}`);
        } else {
          router.push("/");
        }
      } else if (res?.success === false) {
        const errorMessage = res?.message || "An unexpected error occurred.";
        toast.error(errorMessage);
      } else {
        const errorMessage = res?.message || "An unexpected error occurred.";
        toast.error(errorMessage);
      }
    } catch (err: any) {
      const errorMessage =
        err?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password below to login to your Pitha Business
            Management Dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                {...field}
                              />
                              {showPassword ? (
                                <EyeOff
                                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                  onClick={togglePasswordVisibility}
                                />
                              ) : (
                                <Eye
                                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                  onClick={togglePasswordVisibility}
                                />
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Link
                    href="/user/forget-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        
        
      </Card>
    </div>
  );
}
