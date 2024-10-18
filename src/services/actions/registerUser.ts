/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const registerCustomer = async (data: any) => {
 
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/create-customer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const customerInfo = await res.json();
  return customerInfo;
};