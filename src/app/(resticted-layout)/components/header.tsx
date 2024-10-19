"use client";
import ThemeToggle from "@/components/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";

export default function Header() {
  const [userInfo, setUserInfo] = useState<any>(); // Initialize with user info

  console.log("🚀 ~ userInfo:", userInfo);

  useEffect(() => {
    const fetchUserData = () => {
      const updatedUserInfo = getUserInfo(); // Fetch updated user info
      setUserInfo(updatedUserInfo); // Update state
    };

    fetchUserData(); // Call it once on mount

   
  }, []);
  
  return (
    <header className="sticky inset-x-0 top-0 w-full  border-b">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar role={userInfo?.role} />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
