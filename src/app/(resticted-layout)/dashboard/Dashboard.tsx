import Card from "@/components/card/Card";
import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
      </div>
    </div>
  );
};

export default Dashboard;
