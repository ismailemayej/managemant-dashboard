"use client";
import { getUserInfo } from "@/services/auth.services";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar";

const CurrentUserSet = () => {
  const [user, setUser] = useState();
  console.log("Current User", user);
  useEffect(() => {
    const data = getUserInfo();
    setUser(data);
  }, []);

  return (
    <div>
      <Sidebar role={user?.role} />
    </div>
  );
};

export default CurrentUserSet;
