import React from "react";
import { DailyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/daily-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/columns";
import Card from "@/components/card/Card";

const DailyDelevery = () => {
  return (
    <div className="mx-3">
      <div className="grid lg:grid-cols-4 justify-center grid-cols-2 gap-4">
        <Card title="Order" text="+52369" />
        <Card title="Dispatched Order" text="+4369" />
        <Card title="Delivered Order" text="+369" />
      </div>
      <DailyDeleveryDataTable columns={columns} data={tasks} />
    </div>
  );
};

export default DailyDelevery;
