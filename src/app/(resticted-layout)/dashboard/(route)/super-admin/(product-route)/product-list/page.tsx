import React from "react";
import AllProduct from "./AllProduct";
// import { Get } from "@/components/ApiHandle";

const page = async () => {
  // const AllProducts = await Get("name");
  return (
    <div>
      <AllProduct />
    </div>
  );
};

export default page;
