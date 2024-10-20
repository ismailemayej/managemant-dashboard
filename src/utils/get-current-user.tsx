"use server";
import { getUserInfo } from "@/services/auth.services";

// This async function fetches the user info
export async function useUser() {
  try {
    const data = await getUserInfo();
    console.log("🚀 ~ Server ~ userInfo:", data);
    return data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
}




