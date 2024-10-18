import React from "react";
import { faker } from "@faker-js/faker";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
import { Modal2 } from "@/components/dialog/Dialog2"; 

const AllAdmin = () => {
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
  const users = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    mobile: faker.phone.number(),
    image: faker.image.avatar(),
  }));

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
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg relative h-96">
            <img
              src={user.image}
              alt={user.name}
              className="w-52 h-52 rounded-full text-center mb-4"
            />
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.mobile}</p>
            <div className="w-full absolute bottom-1">
              <Modal2
                button="View Details"
                name="User Information"
                body="user Information ,user Details"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAdmin;
