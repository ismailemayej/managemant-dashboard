import React from "react";
import CustomerList from "./CustomerList";
import { Get } from "@/components/ApiHandle";

const page = async () => {
  const customer = await Get("name");
  return (
    <div>
      <CustomerList />
    </div>
  );
};

export default page;
