import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MonthlyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/monthly-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/columns";

const MonthlyPage = () => {
  return (
    <div className="mx-3">
      {/* Cart */}
      <div className="flex gap-2 text-xl">
        <span className="font-semibold">Date:</span>20-10-2024
      </div>
      <div className="grid lg:grid-cols-4 justify-center grid-cols-2 gap-2">
        <div className="lg:w-72 w-64 h-32 rounded-xl bg-slate-100 border pb-6 my-2">
          <div className="m-4">
            <h1 className=" text-lg ">Total Completed Order</h1>
            <h1 className="text-4xl font-bold mt-2">+3302</h1>
          </div>
        </div>
        <div className="lg:w-72 w-64 h-32 rounded-xl bg-slate-100 border pb-6 my-2">
          <div className="m-4">
            <h1 className=" text-lg ">Total Amount</h1>
            <h1 className="text-4xl font-bold mt-2">+8302 TK</h1>
          </div>
        </div>
      </div>
      <MonthlyDeleveryDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default MonthlyPage;
