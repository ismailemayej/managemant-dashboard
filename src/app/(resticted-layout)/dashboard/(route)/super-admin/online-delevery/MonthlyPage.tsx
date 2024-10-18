import React from "react";
import { MonthlyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/monthly-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/columns";
import Card from "@/components/card/Card";

const MonthlyPage = () => {
  return (
    <div className="mx-3">
      {/* Cart */}
      <div className="flex gap-2 text-xl">
        <span className="font-semibold">Date:</span>20-10-2024
      </div>
      <div className="grid lg:grid-cols-4 justify-center grid-cols-2 gap-2">
        <Card text="+3302" title="Total Completed Order" />
        <Card text="+8302 TK" title="Total Amount" />
      </div>
      <MonthlyDeleveryDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default MonthlyPage;
