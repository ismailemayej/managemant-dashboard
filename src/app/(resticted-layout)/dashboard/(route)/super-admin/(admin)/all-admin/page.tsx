import React from "react";
import AllAdmin from "./AllAdmin";
import { faker } from "@faker-js/faker";
import { Get } from "@/components/ApiHandle";
const page = async () => {
  // cons admins = await Get("name")
  const admins = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    mobile: faker.phone.number(),
    image: faker.image.avatar(),
  }));
  return (
    <div>
      <AllAdmin admins={admins} />
    </div>
  );
};

export default page;
