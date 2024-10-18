import Card from "@/components/card/Card";
import React from "react";

const Dashboard = () => {
  return (
    <div className="lg:mx-6 lg:my-2">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-4">
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
        <Card title="Total Employee" text="+25685" />
      </div>
    </div>
  );
};

export default Dashboard;
