import React from "react";

import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
import { Modal } from "@/components/dialog/Dialog";
import ManageAdmin from "../ManageAdmin";

interface Admin {
  id: number;
  name: string;
  email: string;
  mobile: string;
  image: string;
}

const AllAdmin = ({ admins }: { admins: Admin[] }) => {
  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Admin",
      link: "/dashboard/super-admin/all-admin",
    },
  ];

  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Admin"
        subtitle="Manage employees (Server side table functionalities.)"
        right={
          <CommonButton link="/dashboard/super-admin/add-new-admin">
            Add New Admin
          </CommonButton>
        }
      />

      <h1 className="text-center text-3xl font-bold my-2">All Admins</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {admins.map((admin) => (
          <div key={admin.id} className="p-4 border rounded-lg relative h-96">
            <img
              src={admin.image}
              alt={admin.name}
              className="w-52 h-52 rounded-full text-center mb-4"
            />
            <h2 className="text-xl font-bold">{admin.name}</h2>
            <p className="text-gray-600">{admin.email}</p>
            <p className="text-gray-600">{admin.mobile}</p>
            <div className="w-full absolute bottom-1">
              <Modal
                button="Manage"
                name="Admin Information"
                body={<ManageAdmin />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAdmin;
