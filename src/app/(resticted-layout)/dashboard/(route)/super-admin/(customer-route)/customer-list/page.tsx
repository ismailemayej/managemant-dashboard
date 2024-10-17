import React from "react";
import CustomerList from "./CustomerList";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";

const page = () => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Customers",
      link: "/dashboard/super-admin/customer-list",
    },
  ];
  return (
    <div>
      <UiRoute
        routes={pathRoute}
        right={
          <CommonButton link="/dashboard/super-admin/add-new-customer">
            Add New Customer
          </CommonButton>
        }
      />
      <CustomerList />
    </div>
  );
};

export default page;
