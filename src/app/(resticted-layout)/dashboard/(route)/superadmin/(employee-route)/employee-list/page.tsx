import React from "react";
import EmployeList from "./EmployeList";
// import { Get } from "@/components/ApiHandle";

const page = async () => {
  // const employee = await Get("name");
  return (
    <div>
      <EmployeList />
    </div>
  );
};

export default page;
