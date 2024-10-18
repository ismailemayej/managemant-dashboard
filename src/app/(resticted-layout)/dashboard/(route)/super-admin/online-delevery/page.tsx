import React from "react";
import OnlineOrder from "./OnlineDeliveryTabs";
import { Get } from "@/components/ApiHandle";

const page = async () => {
  // const DelivaryData = await Get("name");
  return (
    <div>
      <OnlineOrder />
    </div>
  );
};
export default page;
