"use client";
import { getUserInfo } from "@/services/auth.services";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar";

interface User {
  role?: string;
}

const CurrentUserSet = () => {
  const [user, setUser] = useState<User | undefined>();

  console.log("Current User", user);

  useEffect(() => {
    const data = getUserInfo();
    if (data) {
      setUser(data);
    } else {
      setUser(undefined);
    }
  }, []);

  return (
    <div>
      <Sidebar role={user?.role ?? ""} />
    </div>
  );
};

export default CurrentUserSet;
