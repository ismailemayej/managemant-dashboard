import Header from "../components/header";
import Sidebar from "../components/sidebar";
import type { Metadata } from "next";
import CurrentUserSet from "../components/utils/CurrentUserSet";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <CurrentUserSet />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
