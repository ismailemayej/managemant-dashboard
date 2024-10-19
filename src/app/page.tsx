"use client"
import { Button } from "@/components/ui/button";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.services";
import { useState , useEffect} from "react";
export default  function Home() {
  const {data} = useGetSingleUserQuery("")
  console.log("🚀 ~ Home ~ data:", data)
  const [userInfo, setUserInfo] = useState<any>(null); // Manage user info state
  console.log("🚀 ~ Home ~ userInfo:", userInfo)

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await getUserInfo();
      setUserInfo(data);
      console.log("🚀 ~ Home ~ userInfo:", data);
    }

    fetchUserInfo();
  }, []);
  return (
    <div>
      <Button>Click me</Button>
   {
    userInfo?.role && <p>{ userInfo?.role}</p>
   }
    </div>
  );
}
