import Card from "@/components/card/Card";
import React from "react";
import Dashboard from "./(component)/Dashboard";
import { ChartTable } from "./(component)/Chart";

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
      <ChartTable />
    </div>
  );
};

export default DashboardPage;
