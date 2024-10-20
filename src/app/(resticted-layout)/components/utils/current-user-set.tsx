"use client";
import { getUserInfo } from '@/services/auth.services';
import { useState, useEffect } from 'react';
import Sidebar from '../sidebar';

const CurrentUserSet = () => {
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
    <div>
      {/* Use the role from userInfo dynamically */}
      <Sidebar role={userInfo?.role} />

    </div>
  );
}

export default CurrentUserSet;
